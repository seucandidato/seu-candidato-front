import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loggedIn = new BehaviorSubject<boolean>(this.checkToken());

  constructor(private router: Router) {}

  get loggedIn() {
    return this._loggedIn.asObservable();
  }

  checkToken(): boolean {
    return !!localStorage.getItem('access_token');
  }

  login(access_token: string): void {
    if (access_token) {
      localStorage.setItem('access_token', access_token);
      this._loggedIn.next(true);
      this.router.navigateByUrl('/cms').then(() => {
        window.location.reload();
      });
    }
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this._loggedIn.next(false);
    this.router.navigateByUrl('/').then(() => {
      window.location.reload();
    });
  }
}