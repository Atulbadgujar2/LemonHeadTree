import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule } from 'app/forms/forms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
   
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    LabelModule,
  ]
})
export class OrderModule { }
