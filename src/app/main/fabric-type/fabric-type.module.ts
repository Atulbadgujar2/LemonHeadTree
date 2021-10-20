import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabriclistComponent } from './fabric-list/fabric-list.component';
import { FabricaddComponent } from './fabric-add/fabric-add.component';
import { FabriceditComponent } from './fabric-edit/fabric-edit.component';
import { FabricTypeRoutingModule } from './fabric-type-routingmodule/fabric-type-routing.module';
import { ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { TrnaslateLazyModule } from 'app/core/modules/translate-lazy.module';
import { TranslateModule } from '@ngx-translate/core';
import { DateTimeFormatterPipe } from 'app/core/pipes/datetimeformatter.pipe';
import { CurrencyFormattorPipe } from 'app/core/pipes/currencyformatter.pipe';
import { DropDownListModule, DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from 'app/forms/forms.module';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DateInputsModule, DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupModule } from '@progress/kendo-angular-popup';

import { SharedComponentModule } from 'app/shared/shared-component/shared-component.module';



@NgModule({
  declarations: [FabriclistComponent, FabricaddComponent, FabriceditComponent],
  providers:[DateTimeFormatterPipe, CurrencyFormattorPipe ],
  imports: [
    CommonModule,
    FabricTypeRoutingModule,
    SharedComponentModule,
    GridModule,
    CommonModule,
    DropDownListModule,
    GridModule,
    FormsModule,
    ExcelModule,
    PDFModule,
    DatePickerModule,
    DialogsModule,
    GridModule,
    ExcelModule,
    PDFModule,
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
export class FabrictypeModule { }