import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppareilViewRoutingModule } from './appareil-view-routing.module';
import { AppareilViewComponent } from './appareil-view.component';
import { AppareilComponent } from '../appareil/appareil.component';
import { SingleAppareilComponent } from '../single-appareil/single-appareil.component';

@NgModule({
  imports: [
    CommonModule,
    AppareilViewRoutingModule,
    FormsModule
  ],
  declarations: [
    AppareilComponent,
    AppareilViewComponent,
    SingleAppareilComponent
  ]
})
export class AppareilViewModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/