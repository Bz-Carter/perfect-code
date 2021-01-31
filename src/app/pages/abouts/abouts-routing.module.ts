import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutsComponent } from './abouts.component';

const routes: Routes = [
  {
    path: '',
    component: AboutsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutsRoutingModule { }
