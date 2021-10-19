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
          { path: 'dashboard', loadChildren: () => import('app/dashboard/dashboard.module').then(m => m.DashboardModule),
                data: {
                  title: 'Dashboard Page'
                }},
                {
                        path: 'ui-elements',
                        loadChildren: () => import('app/ui-elements/ui-elements.module').then(m => m.UiElementsModule),
                        data: {
                          title: 'UI Elements'
                        },
                      },
                      {
                              path: 'forms',
                              loadChildren: () => import('app/forms/forms.module').then(m => m.FormsModule),
                              data: {
                                title: 'Form Page'
                              },
                            },
                            {
                                    path: 'fabrictype',
                                    loadChildren: () => import('app/fabric-type/fabric-type.module').then(m => m.FabrictypeModule),
                                    data: {
                                      title: 'Form Page'
                                    },
                                  },
         

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
