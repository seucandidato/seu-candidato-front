import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CardSiteComponent } from '../../components/card-site/card-site.component';
import { FaqService } from '../../services/faq/faq.service';

import { AccordionModule } from 'primeng/accordion';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardPlanComponent } from '../../components/card-plan/card-plan.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarouselModule, CardSiteComponent, CardPlanComponent,AccordionModule, HttpClientModule],
  providers: [FaqService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/400`);
  items = ['First', 'Second', 'Third'];
  //TODO mockar dados e colocar para o componente
  cards = [1,2,3,4,5,6]
  plans = [1,2,3,4]
  faqQuestions: any;

  constructor(private faqService:FaqService) {}

 async ngOnInit(): Promise<void> {
    this.faqService.getFaq().subscribe((response) => {
      console.log(typeof(response))
      this.faqQuestions = response;
      console.log(this.faqQuestions)
    });
  }

}
