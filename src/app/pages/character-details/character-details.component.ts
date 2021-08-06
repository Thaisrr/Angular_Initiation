import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../../services/character.service';
import {catchError, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Character} from '../../tools/classes/Character';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  character: Character;
  isLoading = true;
  message: string;
  id: number;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(
        /* On utilise la donnée de l'obervable en cours puis on
        l'abandonne et on retourne un autre observable
         Permet d'éviter les "subscribe's hell" -> les subscribes dans les subscribes
         */
        switchMap(params => {
          this.id = params.id;
          return this.characterService.getOne(this.id);
        }),
        catchError(err => {
          console.error(err.error);
          return of(false);
        })
      ).subscribe(data => { //
        if (data && typeof data === 'object') {
          this.character = data;
        }
        this.isLoading = false;
      });
    console.log(this.character); // undefined
  }

  delete(): void {
    if (confirm('Êtes-vous sûr(e) de vouloir supprimer ce personnage ?')) {
      this.characterService.delete(this.character.id).subscribe(_ => {
        this.router.navigate(['/characters']).then(
          () => alert('Personnage supprimé')
        );
      });
    }
  }

}
