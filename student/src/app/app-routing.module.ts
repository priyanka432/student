import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StInformationComponent } from './st-information/st-information.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { FoundComponent } from './found/found.component';
const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full' },
  {path: '', component: StInformationComponent},
  {path: 'list', component: ListComponent},
  {path: 'edit', component:  EditComponent},
  {path: 'st-information', component: StInformationComponent},
  {path: 'edit-user/:id', component: StInformationComponent},
  {path: '**', component: FoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
