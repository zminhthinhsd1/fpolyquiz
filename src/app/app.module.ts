import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ExamComponent } from './exam/exam.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: SubjectsComponent},
      {path: 'subjects/:idSubject', component: ExamComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
