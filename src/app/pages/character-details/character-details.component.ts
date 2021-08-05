import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../../services/character.service';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from "rxjs";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  character: any;
  isLoading = true;
  message: string;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getOne(200).pipe(
      tap( data => {
        console.log('dans le tap');
        return data;
      }),
      map(data => {
        console.log('dans le map - pour modifier la donnée')
        return data;
      }),
      catchError(err => {
        return of(false);
      })
    ).subscribe(data => {
      if (!data) { // Si j'ai pas de data ou si data est faux
        this.character = data;
      }
      this.isLoading = false;
    });
    console.log(this.character); // undefined
  }
}
