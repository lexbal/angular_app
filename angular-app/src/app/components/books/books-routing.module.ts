import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
    AuthGuardService as AuthGuard
} from '../../services/auth/auth-guard.service';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { SingleBookComponent } from './single-book/single-book.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: BookListComponent
  },
  {
    path: 'new',
    canActivate: [AuthGuard],
    component: BookFormComponent
  },
  {
    path: 'view/:id',
    canActivate: [AuthGuard],
    component: SingleBookComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/