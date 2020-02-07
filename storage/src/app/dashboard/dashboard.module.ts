import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard.component';
import { ChangePswdComponent } from './change-pswd/change-pswd.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DocumentComponent } from './document/document.component';
import { TrashComponent } from './trash/trash.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [ProfileComponent,
     DashboardComponent,
     ChangePswdComponent,
     DocumentComponent,
     TrashComponent,
     HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
