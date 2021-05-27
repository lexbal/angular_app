import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  { 
    path: 'blog', 
    loadChildren: () => import('./components/blog/blog.module').then(m => m.BlogModule) 
  },
  { 
    path: 'appareils', 
    loadChildren: () => import('./components/appareil-view/appareil-view.module').then(m => m.AppareilViewModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
