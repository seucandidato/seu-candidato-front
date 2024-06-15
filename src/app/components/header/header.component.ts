import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { buildMenu } from '../../services/interfaces/buildMenu';
import { AuthService } from '../../pages/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgbNavModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  navbar!: buildMenu;

  constructor(private authService: AuthService, private router: Router) {}

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
    const cmsRoutes: string[] = ['/cms', '/cms/contato']

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

  logout() {
    this.authService.logout();
  }
}
