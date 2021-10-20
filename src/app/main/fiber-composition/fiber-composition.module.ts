import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiberCompositionRoutingModule } from './fiber-composition-routing.module';

import { FiberCompositionEditComponent } from './fiber-composition-edit/fiber-composition-edit.component';
import { SharedComponentModule } from 'app/shared/shared-component/shared-component.module';
import { ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { DropDownListModule, DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from 'app/forms/forms.module';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule, DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupModule } from '@progress/kendo-angular-popup';
import { TranslateModule } from '@ngx-translate/core';
import { DateTimeFormatterPipe } from 'app/core/pipes/datetimeformatter.pipe';
import { CurrencyFormattorPipe } from 'app/core/pipes/currencyformatter.pipe';


@NgModule({
  declarations: [FiberCompositionEditComponent, FiberCompositionEditComponent, FiberCompositionEditComponent],
  providers:[DateTimeFormatterPipe, CurrencyFormattorPipe ],
  imports: [
    CommonModule,
    FiberCompositionRoutingModule,
    SharedComponentModule,
    GridModule,   
    DropDownListModule,
    FormsModule,
    ExcelModule,
    PDFModule,
    DatePickerModule,
    DialogsModule,   
    ButtonsModule,  
    //TrnaslateLazyModule,
    DropDownsModule,
    LabelModule,
    InputsModule,
    ReactiveFormsModule,
   
    DateInputsModule,
    PopupModule,
  
    TranslateModule.forChild(),
  ]
})
export class FiberCompositionModule { }
