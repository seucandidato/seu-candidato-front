import { CUSTOM_ELEMENTS_SCHEMA, Component, LOCALE_ID, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
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
export class AppComponent implements OnInit {
  title = 'SeuCandidato.Com';
  navbar!: buildMenu;

  get prod(): boolean {
    return environment.env === 'PROD';
  }

  constructor(private router: Router){}
  
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.buildHeaderMenuByRoute();
      }
    });
    this.buildHeaderMenuByRoute();
  }

  buildHeaderMenuByRoute(): void {
    // const cmsRoutes: any[] = ['/login', /registrer]
    const cmsRoutes: string[] = ['/cms']

    if(cmsRoutes.includes(this.router.url)) {
      this.navbar = {
        navbar_route: '/cms',
        items: [
          {name: 'Conteúdos', route: '/cms/conteudos'},
          {name: 'Templates', route: '/cms/templates'},
          {name: 'Pesquisa', route: '/cms/pesquisa'},
          {name: 'Transparência', route: '/cms/transparencia'},
          {name: 'Contato', route: '/cms/contato'},
          {name: 'Perfil', main: true, submenu: [
            {name: 'Configurações', route: '/cms/configuracoes'},
            {name: 'Planos', route: '/cms/planos'},
            {name: 'Sair', route: '/logout'},
          ]},
        ]
      }
    } else {
      this.navbar = {
        navbar_route: '/',
        items: [
          {name: 'Destaques', route: '#destaques'},
          {name: 'Planos', route: '#planos'},
          {name: 'Contato', route: '#contato'},
          {name: 'Entrar', route: '/login', main: true},
        ]
      }
    }
  }

  hasHeaderRoute(): boolean {
    // const routes: any[] = ['/login', /registrer]
    const routes: string[] = []

    if(routes === null) {
      return false;
    }

    return !routes.includes(this.router.url);

  }

}
