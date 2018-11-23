import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { SamsungComponent } from './samsung.component';
import {DeviceComponent} from './device/device.component';
const routes: Routes = [
    {
        path: 'device', component: DeviceComponent, 
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class SamsungRoutingModule { } 