import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricCompositionRoutingModule } from './fabric-composition-routing.module';
import { FabricCompositionAddComponent } from './fabric-composition-add/fabric-composition-add.component';
import { FabricCompositionListComponent } from './fabric-composition-list/fabric-composition-list.component';
import { FabricCompositionEditComponent } from './fabric-composition-edit/fabric-composition-edit.component';


@NgModule({
  declarations: [FabricCompositionAddComponent, FabricCompositionListComponent, FabricCompositionEditComponent],
  imports: [
    CommonModule,
    FabricCompositionRoutingModule
  ]
})
export class FabricCompositionModule { }
