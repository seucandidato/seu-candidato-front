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
  this._loggedIn.next(this.checkToken());
  return this._loggedIn.asObservable();
}

  checkToken(): boolean {
    return localStorage.getItem('access_token') ? true : false;
  }
  
  login(access_token: string): void {
    if(access_token) {
      localStorage.setItem('access_token', access_token);
      this.router.navigate(['cms']);
    }
  }

  logout(): void {
  localStorage.clear();
  this._loggedIn.next(false);
  this.router.navigate(['/login']);
  }
}