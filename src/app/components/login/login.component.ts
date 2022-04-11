import { Router } from '@angular/router';
import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  credentialsInvalid: boolean = false;




  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.credentialsInvalid = false;
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      this.loginService.loginUser(username, password)
        .pipe(first())
        .subscribe({
          next: () => {
            console.log("Login erfolgreich");
            this.router.navigate(['']);
          },
          error: () => {
            console.log("Login fehlgeschlagen");
            this.credentialsInvalid = true;
          }
        });
    }
  }

}
