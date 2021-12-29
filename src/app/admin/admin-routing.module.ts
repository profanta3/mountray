import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageDatasetComponent } from './manage-dataset/manage-dataset.component';


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
        { path: 'manage-dataset', component: ManageDatasetComponent},
        { path: '', component: AdminDashboardComponent},
        //{ path: '**', component: AdminDashboardComponent}
      ]
    }]
  },
  { path: 'manage-dataset', component: ManageDatasetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
