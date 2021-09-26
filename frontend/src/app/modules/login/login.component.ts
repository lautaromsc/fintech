import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthenticationService } from '../../services/authentication.service'
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  loading: boolean;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private AuthenticationService: AuthenticationService,
    private router: Router
  ) { }




  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }
  get form() { return this.loginForm.controls; }


  login = () => {


    this.AuthenticationService.login(this.form.username.value, this.form.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['home']);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

}
