import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from '../request/request.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CmsContactApiService {
  private contactPath = 'contact';
  private fetchedContactPath$!: Observable<any>;

  constructor(private requestService: RequestService) { }

  getContacts(force = false): Observable<any> {
    if(!this.fetchedContactPath$ || force) {
      const url = `${environment.apiUrl}/${this.contactPath}`;

      return this.requestService.get<string>(url);
    }
    
    return this.fetchedContactPath$
  }
}
