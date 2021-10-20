import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricRoutingModule } from './fabric-routing.module';
import { FabricEditComponent } from './fabric-edit/fabric-edit.component';
import { FabricListComponent } from './fabric-list/fabric-list.component';
import { FabricAddComponent } from './fabric-add/fabric-add.component';


@NgModule({
  declarations: [FabricEditComponent, FabricListComponent, FabricAddComponent],
  imports: [
    CommonModule,
    FabricRoutingModule
  ]
})
export class FabricModule { }
