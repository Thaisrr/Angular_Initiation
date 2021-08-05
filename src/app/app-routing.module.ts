import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharacterDetailsComponent} from './pages/character-details/character-details.component';


const routes: Routes = [
  {path: 'character', component: CharacterDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
