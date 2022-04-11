import { User } from './../../model/user';
import { Observable } from 'rxjs';
import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User | null = null;

  constructor(
    private loginService: LoginService
  ) {
    this.loginService.user.subscribe(user => this.user = user);
  }

  ngOnInit(): void { }

  logout() {
    this.loginService.logoutUser();
  }
}
