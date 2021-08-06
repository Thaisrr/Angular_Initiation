import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharacterDetailsComponent} from './pages/character-details/character-details.component';
import {CharactersListComponent} from './pages/characters-list/characters-list.component';
import {RegisterComponent} from './pages/register/register.component';


const routes: Routes = [
  {path: 'login', component: RegisterComponent},
  {path: 'character/:id', component: CharacterDetailsComponent},
  {path: 'characters', component: CharactersListComponent},
  {path: 'login', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
