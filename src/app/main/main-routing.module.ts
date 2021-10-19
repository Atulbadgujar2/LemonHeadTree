import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent
        , children: [
          { path: '', redirectTo: 'main', pathMatch: 'full',data: { preload: true } },
         

          {
            path: '**',
            redirectTo: 'home'
          }
        ]
      },
      {
        path: '**',
        redirectTo: 'main'
      }
    ])
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
