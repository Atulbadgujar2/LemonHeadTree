import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FabricCompositionListComponent } from './fabric-composition-list/fabric-composition-list.component';


const routes: Routes = [{
  path: '',  
  component: FabricCompositionListComponent,
  data: {
    title: 'Fiber Composition'
  }
},
{
  path: 'fabriccomposition',  
  component: FabricCompositionListComponent,
  data: {
    title: 'Fiber Composition'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabricCompositionRoutingModule { }
