import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FabriclistComponent } from '../fabriclist/fabriclist.component';




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
export class FabrictyperoutingmoduleRoutingModule { }
