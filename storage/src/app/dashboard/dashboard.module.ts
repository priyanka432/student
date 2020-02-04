import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard.component';
import { ChangePswdComponent } from './change-pswd/change-pswd.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ProfileComponent,
     DashboardComponent,
     ChangePswdComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule {
  constructor()
  {
  console.log('dashboard loaded');
  }
 }
