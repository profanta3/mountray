import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  //store the URL to redirect after logged in
  redirectUrl: string | null = null;

  
  /**
   * Emulates a backend call for a login. 
   * @returns 
   */
   login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = true)
    );
  }


  /**
   * Logs the User out.
   */
  logout(): void {
    this.isLoggedIn = false;
  }
}
