import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/client/home/home.component';
import { AdminFullComponent } from './shared/layouts/admin-full/admin-full.component';
import { BlankComponent } from './shared/layouts/blank/blank.component';


const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path : '',
        loadChildren: './views/client/client.module#ClientModule'
      }
    ]
  },
  {
    path: 'admin',
    component: AdminFullComponent,
    children: [
      {
        path : '',
        loadChildren: './views/admin/admin.module#AdminModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
