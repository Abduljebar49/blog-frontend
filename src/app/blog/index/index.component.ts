import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from 'src/app/models/blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  blogs: Blog[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private service: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs() {
    this.blogs = this.service.getBlogs();
  }

  onTableDataChange($event: any) {

  }
}
