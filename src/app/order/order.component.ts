import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  selectedPaymentMethodName = '';
  selectedPaymentMethod = new FormControl('0');
  constructor() {

  }
  ngOnInit(): void {
    this.selectedPaymentMethod.valueChanges.subscribe((res: any) => {
      if (res === '0') this.selectedPaymentMethodName = '';
      else this.selectedPaymentMethodName = res.toString();
    });
  }
}
