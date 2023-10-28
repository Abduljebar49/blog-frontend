import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './index/index.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    IndexComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
