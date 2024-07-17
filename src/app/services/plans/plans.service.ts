import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  private plansPath = 'plans';

  constructor(private requestService: RequestService) { }

  getPlans(): Observable<any> {
   const url = `${environment.apiUrl}/${this.plansPath}`;
   return this.requestService.get(url);
  }
}
