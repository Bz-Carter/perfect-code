import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PraticalRoutingModule } from './pratical-routing.module';
import { PraticalComponent } from './pratical.component';


@NgModule({
  declarations: [PraticalComponent],
  imports: [
    CommonModule,
    PraticalRoutingModule
  ]
})
export class PraticalModule { }
