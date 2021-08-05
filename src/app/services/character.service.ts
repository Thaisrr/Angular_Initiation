import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {API_URL} from '../tools/constants/url';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  url = `${API_URL}character`;

  constructor(
    private http: HttpClient
  ) { }

  getOne(id: number): Observable<any> {
    console.log('hey');
    console.log('sending to ',`${this.url}/${id}` );
    return this.http.get(`${this.url}/${id}`);
  }
}
