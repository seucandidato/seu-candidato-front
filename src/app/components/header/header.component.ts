import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgbNavModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
