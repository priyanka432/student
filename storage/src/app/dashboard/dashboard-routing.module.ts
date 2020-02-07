import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard.component';
import { ChangePswdComponent } from './change-pswd/change-pswd.component';
import { DocumentComponent } from './document/document.component';
import { TrashComponent } from './trash/trash.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'changePswd', component: ChangePswdComponent},
    {path: 'document', component: DocumentComponent},
    {path: 'trash', component: TrashComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
