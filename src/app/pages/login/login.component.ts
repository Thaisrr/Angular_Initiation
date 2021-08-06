import { Component, OnInit } from '@angular/core';
import {User} from '../../tools/classes/User';
import {AuthService} from "../../services/auth.service";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {email: '', password: ''} as User;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  connect(): void {
    this.authService.login(this.user).pipe(
      catchError(err => {
        alert(err.error);
        return of(false);
      })
    ).subscribe(data => {
      if (data) {
        this.router.navigate(['/characters'])
          .then(_ => alert('Bienvenue'));
      }
    });
  }



}
