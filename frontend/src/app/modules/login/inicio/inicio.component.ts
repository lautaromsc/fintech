import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import md5 from 'md5'
import {  NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {


  public hide = true;
  public loginForm: FormGroup;
  public loading: boolean;
  public error: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private AuthenticationService: AuthenticationService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private _spinner: NgxSpinnerService
  ) { }




  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    })


    if ( localStorage.getItem('userID').length > 0 ) {

      this._spinner.show()

      setTimeout(()=>{                       
        this._spinner.hide()
        this.router.navigate(['home/shipping']);
      }, 1000);

  
    }


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
          this.router.navigate(['home/shipping']);
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
