import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
