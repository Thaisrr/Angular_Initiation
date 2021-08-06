import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../../services/character.service';
import {Character} from '../../tools/classes/Character';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  characters: Character[] = [];

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.characterService.getAll().subscribe(data => {
      this.characters = data;
    });
  }

}
