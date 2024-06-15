import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CmsContactApiService } from '../../../services/cmsContactApi/cms-contact-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cms-contact',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [CmsContactApiService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './cms-contact.component.html',
  styleUrl: './cms-contact.component.scss'
})
export class CmsContactComponent implements OnInit{

  constructor(private cmsContactApi: CmsContactApiService) {}

  ngOnInit(): void {
    this.cmsContactApi.getContacts().subscribe((response) => { 
      console.log(response);
    }); 
  }
}
