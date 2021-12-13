import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule } from 'app/forms/forms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order.component';
import { TranslateModule } from '@ngx-translate/core';
import { TrnaslateLazyModule } from 'app/core/modules/translate-lazy.module';
import { SharedComponentModule } from 'app/shared/shared-component/shared-component.module';
import { LayoutModule } from '@progress/kendo-angular-layout';



@NgModule({
  declarations: [OrderComponent],
  imports: [   
    CommonModule,
    SharedComponentModule,
    TrnaslateLazyModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    LabelModule,    
    TranslateModule.forChild(),
    LayoutModule,
  ]
})
export class OrderModule { }
