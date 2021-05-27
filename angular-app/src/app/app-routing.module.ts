import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth/auth-guard.service';
import { LoginComponent } from './components/login/login.component';

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
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/appareil-view/appareil-view.module').then(m => m.AppareilViewModule) 
  },
  { 
    path: 'login',
    component: LoginComponent
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
