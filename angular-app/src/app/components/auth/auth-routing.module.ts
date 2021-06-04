import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FirebaseLoginComponent } from './firebase-login/firebase-login.component';
import { 
  IsSignedInGuardService as IsSignedInGuard 
} from '../../services/auth/is-signed-in-guard.service';

const routes: Routes = [
  { 
    path: 'login', 
    canActivate: [IsSignedInGuard],
    component: LoginComponent
  },
  { 
    path: 'register', 
    canActivate: [IsSignedInGuard],
    component: RegisterComponent
  },
  { 
    path: 'firebase', 
    canActivate: [IsSignedInGuard],
    component: FirebaseLoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
