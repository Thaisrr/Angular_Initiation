import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {API_URL} from '../tools/constants/url';
import {HttpClient} from '@angular/common/http';
import {Character} from '../tools/classes/Character';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  url = `${API_URL}character`;

  constructor(
    private http: HttpClient
  ) { }

  getOne(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.url}/${id}`);
  }

  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>(this.url);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${id}`);
  }

  create(character: Character): Observable<Character> {
    return this.http.post<Character>(this.url, character);
  }

  update(character: Character): Observable<Character> {
    return this.http.put<Character>(this.url, character);
  }

}
