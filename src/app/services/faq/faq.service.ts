import { Injectable } from "@angular/core";
import { RequestService } from "../request/request.service";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class FaqService {
    private faqPath = 'faq';
  
    constructor(private requestService:RequestService) { }

    getFaq(): Observable<any> {
        const url = `${environment.apiUrl}/${this.faqPath}`
        return this.requestService.get(url);
    }  
  }
  