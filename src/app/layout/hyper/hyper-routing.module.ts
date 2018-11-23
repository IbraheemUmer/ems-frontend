import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { PracticeComponent } from './practice.component';
import {OnceagainComponent} from './onceagain/onceagain.component';
const routes: Routes = [
    {
        path: 'onceagain', component: OnceagainComponent, 
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class HyperRoutingModule { } 