import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../tools/classes/User';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {catchError} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('',
          [Validators.required,
            Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@+:;,<>_.€£$%^&*-]).{8,32}$/)])
    });
  }

  save() {
    const user = {
      email: this.userForm.get('email').value,
      password: this.userForm.get('password').value
    } as User;
    this.authService.register(user).pipe(
      catchError(err => {
        alert('Erreur : ' + err.error);
        return of(false);
      })
    ).subscribe(data => {
        if (data) {
          this.router.navigate(['/login'])
            .then(_ => alert('Votre inscription a bien été prise en compte, vous pouvez désormais vous connecter'));
        }
    });
  }

}
