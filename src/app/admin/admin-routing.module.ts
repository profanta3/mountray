import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './api/add/add.component';
import { ApiComponent } from './api/api.component';
import { EditComponent } from './api/edit/edit.component';


const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
    {
      path: '',
      canActivateChild: [AuthGuard],
      children: [
        { 
          path: 'api', 
          component: ApiComponent,
          canActivate: [AuthGuard],
          children: [
            {path: 'add', component: AddComponent},
            {path: 'edit', component: EditComponent}
          ]
        },
        { path: '', component: AdminDashboardComponent},
        //{ path: '**', component: AdminDashboardComponent}
      ]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
