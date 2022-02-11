import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message: string;

  constructor(
    public authService: AuthService, public router: Router
  ) { 
    this.message = this.getMessage();
  }

  getMessage() : string {
    return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  /**
   * logs the user in and navigates redirected URL
   */
  login() {
    this.message = 'Trying to log in...';

    this.authService.login().subscribe(() => {
      this.message = this.getMessage();
      if (this.authService.isLoggedIn) {
        const redirectUrl = this.authService.redirectUrl;

        this.router.navigate([redirectUrl]);
      }
    });
  }

  /**
   * Logs the user out by calling the auth Service module
   */
  logout() {
    this.authService.logout();
    this.message = this.getMessage();
  }
}
