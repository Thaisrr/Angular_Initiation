import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../tools/classes/User';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../tools/constants/url';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = API_URL;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}register`, user);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}login`, user).pipe(
      tap(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.id.toString());
      })
    );
  }

  isAuthenticated(): boolean {
    return localStorage.hasOwnProperty('token');
  }

  getToken(): string | void {
    if (this.isAuthenticated()) {
      return localStorage.getItem('token');
    }
  }

  disconnect(): void {
    localStorage.clear();
    window.location.href = '/login';
  }

}
