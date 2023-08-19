import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  date = new Date();
  @Input() blog: Blog | undefined

  constructor(private router: Router) {
    console.log()
  }
  ngOnInit(): void {}


  openBlog(id: any) {
    this.router.navigate(['/' + id])
  }
}
