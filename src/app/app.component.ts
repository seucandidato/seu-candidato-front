import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgbAccordionModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbAlertModule, NgbAccordionModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SeuCandidato.Com';

  constructor(private router: Router){}

  hasHeaderRoute(): boolean {
    // const routes: any[] = ['/login', /registrer]
    const routes: string[] = []
    if(routes === null) {return true}
    return !routes.includes(this.router.url)
  }

}
