import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { AuthApiService } from '../authApi/auth-api.service';
import { AuthComponent } from '../../pages/auth/auth.component';

@Injectable({
  providedIn: 'any'
})
export class RequestService {
  private httpOptions(headers: any = null): { headers: HttpHeaders } {
    let httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    const token = localStorage.getItem('access_token');
    if (token) {
      httpHeaders = httpHeaders.set('Authorization', `Bearer ${token}`);
    }

    if (headers) {
      httpHeaders = httpHeaders.set(headers.key, headers.value);
    }

    return { headers: httpHeaders };
  }

  constructor(private http: HttpClient) { }

  get<Response>(url: string, headers: any = null): Observable<Response> {
    const getHttpOptions = this.httpOptions(headers);

    return this.http.get<Response>(url, getHttpOptions).pipe(
      tap((response: any) => {
        this.log(response?.message);
      }),
      catchError((error: any) => {
        return of(error);
      })
    );
  }

  post<Request, Response>(url: string, item: Request, headers: any = null): Observable<Response> {
    const postHttpOptions = this.httpOptions(headers);

    return this.http.post<Response>(url, item, postHttpOptions).pipe(
      tap((response: any) => {
        this.log(response?.message);
      }),
      catchError((error: any) => {
        return of(error);
      })
    );
  }

  private log(message: string) {
    return message;
  }

  private handlerError<T>(result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  };
}
