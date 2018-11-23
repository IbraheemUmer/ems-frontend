import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { PageHeaderModule } from './../../shared';
import { ShowemployeeComponent } from './showemployee/showemployee.component';
import { FormsModule } from '@angular/forms';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
//import { DeviceComponent } from './device/device.component';
//import { OnceagainComponent } from './onceagain/onceagain.component';

@NgModule({
    imports: [CommonModule, EmployeeRoutingModule, PageHeaderModule, FormsModule, AngularDateTimePickerModule],
    declarations: [EmployeeComponent, ShowemployeeComponent] 
})
export class EmployeeModule {}