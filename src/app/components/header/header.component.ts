import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { buildMenu } from '../../services/interfaces/buildMenu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgbNavModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnChanges{
  @Input() data!: buildMenu;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data'] && changes['data'].currentValue) {
      this.data = changes['data'].currentValue;
    }
  }
}
