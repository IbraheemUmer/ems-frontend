import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import {ShowstudentComponent} from './showstudent/showstudent.component';
const routes: Routes = [
    { path: 'showstudent', component: ShowstudentComponent},
    {        path: '', component: StudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class StudentRoutingModule { } 