import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamsungRoutingModule } from './samsung-routing.module';
import { SamsungComponent } from './samsung.component';
import { PageHeaderModule } from './../../shared';
import { DeviceComponent } from './device/device.component';
//import { OnceagainComponent } from './onceagain/onceagain.component';

@NgModule({
    imports: [CommonModule, SamsungRoutingModule, PageHeaderModule],
    declarations: [SamsungComponent, DeviceComponent,] 
})
export class SamsungModule {}