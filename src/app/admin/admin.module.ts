import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ApiComponent } from './api/api.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './api/add/add.component';
import { EditComponent } from './api/edit/edit.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ApiComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
