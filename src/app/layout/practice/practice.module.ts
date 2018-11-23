import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule } from './practice-routing.module';
import { PracticeComponent } from './practice.component';
import { PageHeaderModule } from './../../shared';
import { ShowdataComponent } from './showdata/showdata.component';

@NgModule({
    imports: [CommonModule, PracticeRoutingModule, PageHeaderModule],
    declarations: [PracticeComponent, ShowdataComponent,] 
})
export class PracticeModule {}