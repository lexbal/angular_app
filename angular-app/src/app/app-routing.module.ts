import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
  { 
    path: 'users', 
    loadChildren: () => import('./components/user-list/user-list.module').then(m => m.UserListModule) 
  },
  { 
    path: 'courses',
    loadChildren: () => import('./components/courses/courses.module').then(m => m.CoursesModule) 
  },
  { 
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) 
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
