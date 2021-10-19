import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FabriclistComponent } from '../fabric-list/fabric-list.component';




const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: FabriclistComponent,
  data: {
    title: 'Fiber Type'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabricTypeRoutingModule { }
