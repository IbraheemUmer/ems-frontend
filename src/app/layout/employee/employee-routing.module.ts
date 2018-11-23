import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import {ShowemployeeComponent} from './showemployee/showemployee.component';
const routes: Routes = [
    { path: 'showemployee', component: ShowemployeeComponent},
    {        path: '', component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class EmployeeRoutingModule { } 