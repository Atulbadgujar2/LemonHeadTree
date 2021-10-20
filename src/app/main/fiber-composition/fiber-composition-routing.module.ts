import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiberCompositionListComponent } from './fiber-composition-list/fiber-composition-list.component';


const routes: Routes = [{
  path: '',  
  component: FiberCompositionListComponent,
  data: {
    title: 'Fiber Composition'
  }
},
{
  path: 'fibercomposition',  
  component: FiberCompositionListComponent,
  data: {
    title: 'Fiber Composition'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiberCompositionRoutingModule { }
