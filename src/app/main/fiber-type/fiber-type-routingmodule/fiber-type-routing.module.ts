import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiberTypeListComponent } from '../fiber-type-list/fiber-type-list.component';




const routes: Routes = [{
  path: '',  
  component: FiberTypeListComponent,
  data: {
    title: 'Fiber Type'
  }
},
{
  path: 'fabrictype',  
  component: FiberTypeListComponent,
  data: {
    title: 'Fiber Type'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiberTypeRoutingModule { }
