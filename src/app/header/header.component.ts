import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isShown = false;

  constructor(
    public authService: AuthService, public router: Router
  ) { 
  }

  /**
   * Logs the USer out by calling the auth Service
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
