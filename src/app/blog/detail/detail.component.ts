import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id: any;
  blog: Blog | undefined;
  constructor(private service: BlogService, private activeRoute: ActivatedRoute) {
    this.id = this.activeRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.blog = this.service.getBlog(this.id);
    console.log("blog : ",this.blog);
  }
}
