import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierListComponent } from './supplier-list/supplier-list.component';



const routes: Routes = [{
  path: '',  
  component: SupplierListComponent,
  data: {
    title: 'Supplier'
  }
},
{
  path: 'supplier',  
  component: SupplierListComponent,
  data: {
    title: 'Supplier'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
