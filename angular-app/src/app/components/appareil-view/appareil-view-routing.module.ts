import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppareilViewComponent } from './appareil-view.component';

const routes: Routes = [
  {
    path: '',
    component: AppareilViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppareilViewRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/