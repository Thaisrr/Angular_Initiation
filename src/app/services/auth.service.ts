import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../tools/classes/User';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../tools/constants/url";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = API_URL;

  constructor(
    private http: HttpClient
  ) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}register`, user);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}login`, user);
  }
}
