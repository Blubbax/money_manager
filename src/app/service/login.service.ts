import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: String = environment.loginApiUrl;

  private userSubject: BehaviorSubject<any>;
  public user: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') || '{}'));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  loginUser(username: String, password: String) {
    return this.http.post<User>(this.apiUrl + 'auth/', {username, password})
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  logoutUser() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['login']);
  }

}
