import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { RegisterComponent } from './pages/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import {ApiInterceptor} from './tools/interceptors/api.interceptor';
import { NavComponent } from './components/nav/nav.component';
import {UserGuard} from "./tools/guards/user.guard";

@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailsComponent,
    CharactersListComponent,
    RegisterComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
    UserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
