import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import md5 from 'md5'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public hide = true;
  public loginForm: FormGroup;
  public loading: boolean;
  public error: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private AuthenticationService: AuthenticationService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }




  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }
  
  get form() { return this.loginForm.controls; }


  public login = () => {
    this.error = false
    this.AuthenticationService.login(
      this.form.username.value, 
      md5(this.form.password.value) 
    )
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['home/tp4/transferencias']);
          localStorage.setItem('userID', data.body)
        },
        error => {
          this.error = true;
          this.loading = false;
          //this.openSnackBar()
        });
  }


  openSnackBar() {
    this._snackBar.open('Username or Password incorrect!', 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }


}
