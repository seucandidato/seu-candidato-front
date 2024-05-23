import { Injectable } from '@angular/core';
import { dataLogin } from '../interfaces/dataLogin';
import { Observable } from 'rxjs';
import { RequestService } from '../request/request.service';
import { environment } from '../../../environments/environment';
import { responseLogin } from '../interfaces/responseLogin';
import { user } from '../interfaces/user';
import { responseUser } from '../interfaces/responseUser';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private authLogin = 'auth/login';
  private user = 'user';
  private fetchedAuthLogin$!: Observable<responseLogin>; 
  private fetchedUser$!: Observable<responseUser>; 

  constructor(private requestService: RequestService) { }

  authApiService(data: dataLogin, force = false): Observable<responseLogin> {
    if(!this.fetchedAuthLogin$ || force) {
      const url = `${environment.apiUrl}/${this.authLogin}`;

      return this.requestService.post<dataLogin, responseLogin>(url, data);
    }
    
    return this.fetchedAuthLogin$
  }
  
  insertUser(data: user, force = false): Observable<responseUser> {
    if(!this.fetchedUser$ || force) {
      const url = `${environment.apiUrl}/${this.user}`;

      return this.requestService.post<user, responseUser>(url, data);
    }
    
    return this.fetchedUser$
  }}
