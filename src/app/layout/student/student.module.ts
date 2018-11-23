import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { PageHeaderModule } from './../../shared';
import { ShowstudentComponent } from './showstudent/showstudent.component';
import { FormsModule } from '@angular/forms';
//import { DeviceComponent } from './device/device.component';
//import { OnceagainComponent } from './onceagain/onceagain.component';

@NgModule({
    imports: [CommonModule, StudentRoutingModule, PageHeaderModule, FormsModule],
    declarations: [StudentComponent, ShowstudentComponent] 
})
export class StudentModule {}