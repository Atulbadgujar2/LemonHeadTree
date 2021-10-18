import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownListModule, DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule, DatePickerModule } from '@progress/kendo-angular-dateinputs'
import { GridModule, ExcelModule, PDFModule } from '@progress/kendo-angular-grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { GridViewComponent } from '../core/component/grid-view-component/grid-view.component';
//import { CommonLookUpComponent } from '../core/component/common-look-up/common-look-up.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
//import { CommonGridComponent } from '../core/component/common-grid/common-grid.component';

import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';


//import { ControlPermissionDirective } from '../core/directives/controlPermission.directive';

//import { GridExportComponent } from '../core/component/grid-export-component/grid-export.component';
//import { GridContextMenuComponent } from '../core/component/grid-context-menu/grid-context-menu.component';
import { PopupModule } from "@progress/kendo-angular-popup";
import { CommonAlertComponent } from 'app/core/component/common-alert/common-alert.component';
import { AlertComponent } from 'app/core/component/alert/alert.component';
import { DataSharingService } from 'app/core/services/shared/data.sharing.service';


@NgModule({
  imports: [
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
    DropDownsModule,
    LabelModule,
    InputsModule,
    ReactiveFormsModule,
    
    DateInputsModule,
    PopupModule



  ],
  declarations: [CommonAlertComponent, AlertComponent],
  exports: [ CommonAlertComponent,
    DatePickerModule,
    DialogsModule,
    
   

  ],
  providers: [DataSharingService],
})
export class SharedComponentModule { }
