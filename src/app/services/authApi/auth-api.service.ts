import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { dataLogin } from "../interfaces/dataLogin";
import { responseLogin } from "../interfaces/responseLogin";
import { responseUser } from "../interfaces/responseUser";
import { user } from "../interfaces/user";
import { RequestService } from "../request/request.service";


@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private authLogin = 'auth/login';
  private user = 'user';
  private fetchedAuthLogin$!: Observable<responseLogin>; 
  private fetchedUser$!: Observable<responseUser>; 

  constructor(private requestService: RequestService) { }

  login(data: dataLogin, force = false): Observable<responseLogin> {
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
