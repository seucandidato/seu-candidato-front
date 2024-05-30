import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DataToast } from '../../services/interfaces/dataToast';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent implements OnChanges{
  @Input() data!: DataToast; 
  showToast = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.showToast = false; 
      this.handleDataChange();
    }
  }

  handleDataChange() {
      if (this.data && this.data.message) {
          this.showDataToast();
      }
  }

  showDataToast() { 
    this.showToast = true;
    setTimeout(() => {
        this.closeToast();
    }, 10000);
}

  closeToast() { 
      this.showToast = false; 
  }
}
