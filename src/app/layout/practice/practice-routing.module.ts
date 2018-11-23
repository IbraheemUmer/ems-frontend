import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { PracticeComponent } from './practice.component';
import {ShowdataComponent} from './showdata/showdata.component';
const routes: Routes = [
    {
        path: 'showdata', component: ShowdataComponent, 
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class PracticeRoutingModule { }