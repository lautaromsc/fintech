import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import md5 from 'md5'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public hide = true;
  public loginForm: FormGroup;
  public loading: boolean;
  public error: string;

  constructor(
    private formBuilder: FormBuilder,
    private AuthenticationService: AuthenticationService,
    private router: Router
  ) { }




  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      email: [''],
      password: ['']
    })
  }
  
  get form() { return this.loginForm.controls; }


  public login = () => {
    
    this.AuthenticationService.register(this.form.username.value, this.form.email.value, md5(this.form.password.value) )
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['home/tp1']);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }


}
