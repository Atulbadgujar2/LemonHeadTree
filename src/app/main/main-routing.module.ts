import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftNavTemplateComponent } from 'app/template/left-nav-template.component';
import { MainComponent } from './main.component';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LeftNavTemplateComponent
        , children: [
          { path: '', redirectTo: 'main', pathMatch: 'full',data: { preload: true } },
          // { path: 'dashboard', loadChildren: () => import('app/dashboard/dashboard.module').then(m => m.DashboardModule),
          //       data: {
          //         title: 'Dashboard Page'
          //       }},
          //       {
          //               path: 'ui-elements',
          //               loadChildren: () => import('app/ui-elements/ui-elements.module').then(m => m.UiElementsModule),
          //               data: {
          //                 title: 'UI Elements'
          //               },
          //             },
          //             {
          //                     path: 'forms',
          //                     loadChildren: () => import('app/forms/forms.module').then(m => m.FormsModule),
          //                     data: {
          //                       title: 'Form Page'
          //                     },
          //                   },
                            {
                                    path: 'fibertype',
                                    loadChildren: () => import('app/main/fiber-type/fiber-type.module').then(m => m.FibertypeModule),
                                    data: {
                                      title: 'Form Page'
                                    },
                                  },
                                  {
                                    path: 'fabric',
                                    loadChildren: () => import('app/main/fabric/fabric.module').then(m => m.FabricModule),
                                    data: {
                                      title: 'Form Page'
                                    },
                                  },
                                  {
                                    path: 'fibercomposition',
                                    loadChildren: () => import('app/main/fiber-composition/fiber-composition.module').then(m => m.FiberCompositionModule),
                                    data: {
                                      title: 'Form Page'
                                    },
                                  },
                                  {
                                    path: 'supplier',
                                    loadChildren: () => import('app/main/supplier/supplier.module').then(m => m.SupplierModule),
                                    data: {
                                      title: 'Form Page'
                                    },
                                  },
                                  {
                                    path: 'order',
                                    loadChildren: () => import('app/main/order/order.module').then(m => m.OrderModule),
                                    data: {
                                      title: 'Form Page'
                                    },
                                  },
         

          {
            path: '**',
            redirectTo: 'fibertype'
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
