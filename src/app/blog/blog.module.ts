import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { IndexComponent } from './index/index.component';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    IndexComponent,
    BlogComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class BlogModule { }
