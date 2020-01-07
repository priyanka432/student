import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StInformationComponent } from './st-information/st-information.component';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    StInformationComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
