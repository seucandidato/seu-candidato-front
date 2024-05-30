import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class RequestService {
  httpOptionsJson = {
    headers: new HttpHeaders({'Content-type': 'application/json'}),
  }

  httpOptionsFormData = {
    headers: new HttpHeaders({'Content-type': 'multipart/form-data'}),
  }

  constructor(private http: HttpClient) { }

  post<Request, Response>( url: string, item: Request, headers: any = null): Observable<Response> {
    const postItem = {
      ...item,
    }
  
    if (headers) {
      this.httpOptionsJson.headers = this.httpOptionsJson.headers.append(
        headers.key, 
        headers.value
      );
    }
  
    const response = this.http.post<Response>(url, postItem, this.httpOptionsJson).pipe(
      tap((response: any) => {
        this.log(response?.message);
      }),
      catchError((error: any) => {
        return of(error);
      })
    );
  
    return response;
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
