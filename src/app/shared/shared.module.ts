import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    BlogItemComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlogItemComponent,
    FooterComponent
  ]
})
export class SharedModule { }
