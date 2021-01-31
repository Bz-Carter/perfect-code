import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PraticalComponent } from './pratical.component';

const routes: Routes = [
  {
    path: '',
    component: PraticalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PraticalRoutingModule { }
