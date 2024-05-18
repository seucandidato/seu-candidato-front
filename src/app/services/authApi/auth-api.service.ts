import { Injectable } from '@angular/core';
import { dataLogin } from '../interfaces/dataLogin';
import { Observable } from 'rxjs';
import { RequestService } from '../request/request.service';
import { environment } from '../../../environments/environment';
import { responseLogin } from '../interfaces/responseLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private authLogin = 'auth/login';
  private fetchedAuthLogin$!: Observable<responseLogin>; 

  constructor(private requestService: RequestService) { }

  authApiService(data: dataLogin, force = false): Observable<responseLogin> {
    if(!this.fetchedAuthLogin$ || force) {
      const url = `${environment.apiUrl}/${this.authLogin}`;

      return this.requestService.post<dataLogin, responseLogin>(url, data);
    }
    
    return this.fetchedAuthLogin$
  }
}
