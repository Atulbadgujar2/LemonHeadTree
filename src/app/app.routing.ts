
import {Routes, RouterModule} from '@angular/router';
import { PreloadingstrategyService } from './core/misc/preloadingstrategy.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LeftNavTemplateComponent } from './template/left-nav-template.component';




// export const routes: Routes = [{
//   path: '',
//   redirectTo: 'dashboard',
//   pathMatch: 'full'
// }, {
//   path: '',
//   component: LeftNavTemplateComponent,
//   data: {
//     title:'Lemon Head Print Template'
//   },
//   children: [
//     {
//       path: 'dashboard',
//       loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
//       data: {
//         title: 'Dashboard Page'
//       },
//     },
//     {
//       path: 'ui-elements',
//       loadChildren: () => import('./ui-elements/ui-elements.module').then(m => m.UiElementsModule),
//       data: {
//         title: 'UI Elements'
//       },
//     },
//     {
//       path: 'forms',
//       loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
//       data: {
//         title: 'Form Page'
//       },
//     },
//     {
//       path: 'fabrictype',
//       loadChildren: () => import('app/fabric-type/fabric-type.module').then(m => m.FabrictypeModule),
//       data: {
//         title: 'Form Page'
//       },
//     }
//   ]
// }, {
//   path: 'tables',
//   component: LeftNavTemplateComponent,
//   data: {
//     title: 'Tables'
//   },
//   children: [
//     {
//       path: '',
//       loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
//     }
//   ]
// }, {
//   path: '**',
//   component: PageNotFoundComponent
// }];

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
   { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)}        
];



// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes)
//   ],
//   exports: [RouterModule],
//   declarations: []
// })
export const AppRoutingModule = RouterModule.forRoot(routes, {preloadingStrategy: PreloadingstrategyService, relativeLinkResolution: 'legacy' }); 
