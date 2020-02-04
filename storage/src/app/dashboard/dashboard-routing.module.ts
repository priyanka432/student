import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard.component';
import { ChangePswdComponent } from './change-pswd/change-pswd.component';
const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'profile', component: ProfileComponent},
    {path: 'dashboard', component: DashboardComponent},
  {path: 'changePswd', component: ChangePswdComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
