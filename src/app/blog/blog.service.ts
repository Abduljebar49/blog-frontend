import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { Author } from '../models/author';
import { BlogType } from '../models/blog-type';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogs() {
    return this.blogs;
  }

  author: Author = {
    name: 'Abduljebar Sani',
    profession: 'Computer Scientist',
    id: 1
  }

  blogTypes: BlogType[] = [
    {
      title: 'Technology',
      id: 1
    },
    {
      title: 'Finance',
      id: 2
    },
    {
      title: 'Politics',
      id: 3
    },
    {
      title: 'Sports',
      id: 4
    },
    {
      title: 'Culture',
      id: 5
    }
  ]
  date = new Date();
  blogs: Blog[] = [
    {
      title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
      author: this.author,
      type: [this.blogTypes[0]],
      id: 1,
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
      dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
      posuere magna..
      `,
      createdAt: this.date,
      image: 'https://source.unsplash.com/collection/1346951/1000x500?sig=1'
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
      author: this.author,
      type: [this.blogTypes[1]],
      id: 2,
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
      dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
      posuere magna..
      `,
      createdAt: this.date,
      image: 'https://source.unsplash.com/collection/1346951/1000x500?sig=2'
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
      author: this.author,
      type: [this.blogTypes[2],this.blogTypes[3]],
      id: 3,
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
      dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
      posuere magna..
      `,
      createdAt: this.date,
      image: 'https://source.unsplash.com/collection/1346951/1000x500?sig=3'
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
      author: this.author,
      type: [this.blogTypes[3]],
      id: 4,
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
      dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
      posuere magna..
      `,
      createdAt: this.date,
      image: 'https://source.unsplash.com/collection/1346951/1000x500?sig=4'
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
      author: this.author,
      type: [this.blogTypes[4]],
      id: 5,
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
      dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
      posuere magna..
      `,
      createdAt: this.date,
      image: 'https://source.unsplash.com/collection/1346951/1000x500?sig=5'
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
      author: this.author,
      type: [this.blogTypes[0]],
      id: 6,
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
      dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
      posuere magna..
      `,
      createdAt: this.date,
      image: 'https://source.unsplash.com/collection/1346951/1000x500?sig=6'
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
      author: this.author,
      type: [this.blogTypes[2]],
      id: 7,
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
      dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
      posuere magna..
      `,
      createdAt: this.date,
      image: 'https://source.unsplash.com/collection/1346951/1000x500?sig=7'
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
      author: this.author,
      type: [this.blogTypes[1],this.blogTypes[2]],
      id: 8,
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
      dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
      posuere magna..
      `,
      createdAt: this.date,
      image: 'https://source.unsplash.com/collection/1346951/1000x500?sig=8'
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
      author: this.author,
      type: [this.blogTypes[3]],
      id: 9,
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
      dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet
      posuere magna..
      `,
      createdAt: this.date,
      image: 'https://source.unsplash.com/collection/1346951/1000x500?sig=9'
    },
  ]
}
