import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HyperRoutingModule } from './hyper-routing.module';
import { HyperComponent } from './hyper.component';
import { PageHeaderModule } from './../../shared';
import { OnceagainComponent } from './onceagain/onceagain.component';

@NgModule({
    imports: [CommonModule, HyperRoutingModule, PageHeaderModule],
    declarations: [HyperComponent, OnceagainComponent,] 
})
export class HyperModule {}