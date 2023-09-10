import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from 'src/app/models/blog';
import { Router } from '@angular/router';
import { BlogResponse } from 'src/app/models/blog-response';
import { BlogParam } from 'src/app/models/blog-params';
import { BlogType } from 'src/app/models/blog-type';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  blogs: Blog[] = [];
  totalData: BlogResponse | undefined;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private service: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBlogs();
    this.getAllBlogTypes();
  }

  getAllBlogs() {
    let params: BlogParam = {
      perPage: this.tableSize,
      page: this.page,
    }
    this.totalData = this.service.getBlogs(params);
    this.blogs = this.totalData.data;
    this.count = this.totalData.totalBlog;
    console.log("total data : ", this.totalData);
  }

  onTableDataChange($event: any) {
    this.page = $event
    this.getAllBlogs();
  }
  blogTypes: BlogType[] = []
  getAllBlogTypes() {
    this.blogTypes = this.service.getBlogTypes();
  }
}
