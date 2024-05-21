import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CardSiteComponent } from '../../components/card-site/card-site.component';
import { FaqService } from '../../services/faq/faq.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarouselModule, CardSiteComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/400`);

}
