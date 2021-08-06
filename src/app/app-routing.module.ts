import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharacterDetailsComponent} from './pages/character-details/character-details.component';
import {CharactersListComponent} from './pages/characters-list/characters-list.component';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import {UserGuard} from './tools/guards/user.guard';


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'character/:id',
    component: CharacterDetailsComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'characters',
    component: CharactersListComponent,
    canActivate: [UserGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
