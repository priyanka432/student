import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { ListComponent } from './list/list.component';
import { UserService } from './user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FoundComponent } from './found/found.component';
@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    ListComponent,
    FoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor()
  {
  console.log('admin module loaded');
  }
}
