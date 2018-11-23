import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { PageHeaderModule } from './../../shared';
import { ShowuserComponent } from './showuser/showuser.component';

@NgModule({
    imports: [CommonModule, UserRoutingModule, PageHeaderModule],
    declarations: [UserComponent, ShowuserComponent] 
})
export class UserModule {}