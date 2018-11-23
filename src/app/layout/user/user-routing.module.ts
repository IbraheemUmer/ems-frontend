import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowuserComponent} from './showuser/showuser.component';
const routes: Routes = [
    {
        path: 'show-user', component: ShowuserComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class UserRoutingModule { }
