import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

@Component({
  selector: 'app-card-plan',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card-plan.component.html',
  styleUrl: './card-plan.component.scss'
})
export class CardPlanComponent implements OnInit{
  @Input() plan: any = "";
  amount!: number;
  cents!: number; 

  ngOnInit(): void {
    this.amount = this.plan.price.split('.')[0];
    this.cents = this.plan.price.split('.')[1];
  }

}
