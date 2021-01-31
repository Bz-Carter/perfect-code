import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about-us', 
    loadChildren: () => import('./pages/abouts/abouts.module').then(m => m.AboutsModule)
  },
  {
    path: 'pratical', 
    loadChildren: () => import('./pages/pratical/pratical.module').then(m => m.PraticalModule)
  },
  {
    path: 'subscription', 
    loadChildren: () => import('./pages/pricing/pricing.module').then(m => m.PricingModule)
  },
  {
    path: 'blog', 
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'contact-us', 
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },

  { path: '**', pathMatch: 'full', redirectTo: 'page-not-found' },
  { path: '**', component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
