import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isConnected: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isConnected = this.authService.isAuthenticated();
  }

  disconnection() {
    this.authService.disconnect();
  }

}
