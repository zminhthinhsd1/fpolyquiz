import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectsComponent } from "./subjects/subjects.component";
import {ExamComponent} from './exam/exam.component';
const routes: Routes = [
  {path: '', component: SubjectsComponent},
      {path: 'subjects/:idSubject', component: ExamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
