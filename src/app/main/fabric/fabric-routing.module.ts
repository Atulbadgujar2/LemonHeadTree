import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FabricListComponent } from './fabric-list/fabric-list.component';


const routes: Routes = [{
  path: '',  
  component: FabricListComponent,
  data: {
    title: 'Fiber '
  }
},
{
  path: 'fabric',  
  component: FabricListComponent,
  data: {
    title: 'Fiber '
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabricRoutingModule { }
