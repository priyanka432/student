import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegComponent } from './reg/reg.component';
import { ListComponent } from './list/list.component';
import { FoundComponent } from './found/found.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: RegComponent},
  {path: 'reg', component: RegComponent},
  {path: 'list', component: ListComponent},
  {path: 'edit/:id', component: RegComponent},
  {path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule)},
  {path: '**', component: FoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
