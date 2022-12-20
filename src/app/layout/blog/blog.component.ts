import { WebflowserviceService } from './../../services/webflowservice.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  subscription!: Subscription;

  Blogs = [] as any;
  arrayupdate = [];

  constructor(private router: Router, private webflow: WebflowserviceService) {}

  ngOnInit(): void {
    Aos.init({
      duration: 500,
    });
    this.blog();
  }
  blog() {
    this.subscription = this.webflow
      .getData('allitems/6375d4747684b45e464ccf77')
      .subscribe({
        next: (update: any) => {
          console.log(update);

          this.Blogs = update.data;

          this.Blogs.forEach((element: any) => {
            element.imageurl = element['post-main-image'].url;
          });
          console.log(this.Blogs);


          const app = document.getElementById('des');
          const add = document.getElementById('title');
          const n = document.createElement('section');
          const p = document.createElement('section');
          n.innerHTML = this.Blogs[0]['post-excerpt'];
          p.innerHTML = this.Blogs[0]['name'];
          app?.append(n);
          add?.append(p);
        },
        error: (reason: any) => console.log(reason),
      });
  }

  blogcategory(itemid: string, ref: any) {
    this.subscription = this.webflow
      .getData(`blogitembyid/${itemid}`)
      .subscribe({
        next: (data: any) => {
          ref.category = data;
        },
        error: (reason: any) => console.log(reason),
      });
  }
}
