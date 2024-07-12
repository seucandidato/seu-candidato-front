import { CUSTOM_ELEMENTS_SCHEMA, Component, LOCALE_ID } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgbAccordionModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { AuthInterceptor } from './pages/auth/auth.interceptor';
import { buildMenu } from './services/interfaces/buildMenu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HttpClientModule,
    NgbAlertModule, 
    NgbAccordionModule, 
    HeaderComponent, 
    FooterComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SeuCandidato.Com';
  navbar!: buildMenu;

  get prod(): boolean {
    return environment.env === 'PROD';
  }

  constructor(private router: Router){}

  hasHeaderRoute(): boolean {
    // const routes: any[] = ['/login', /registrer]
    const routes: string[] = []

    if(routes === null) {
      return false;
    }

    return !routes.includes(this.router.url);

  }

}
