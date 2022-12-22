import { WebflowserviceService } from './../../services/webflowservice.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Aos from 'aos';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {

  subscription!: Subscription;
  Blogcategory = new Set<string>()

  Blogs = [] as any;
  arrayupdate = [];

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  constructor(
    private router: Router,
     private webflow: WebflowserviceService,
     private route : ActivatedRoute) {}

     readart(id: string) {
      console.log(id);
      this.router?.navigate([`/readarticle/${id}`])
    }


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
    this.subscription = this.webflow.getData(`blogitembyid/${itemid}`).subscribe({
        next: (data: any) => {
          ref.category = data.data.name;
          this.Blogcategory.add(data.data.name)
        },
        error: (reason: any) => console.log(reason),
      });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
