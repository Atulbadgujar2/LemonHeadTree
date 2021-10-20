import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FabricTypeListComponent } from '../fabric-type-list/fabric-type-list.component';




const routes: Routes = [{
  path: '',  
  component: FabricTypeListComponent,
  data: {
    title: 'Fiber Type'
  }
},
{
  path: 'fabrictype',  
  component: FabricTypeListComponent,
  data: {
    title: 'Fiber Type'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabricTypeRoutingModule { }
