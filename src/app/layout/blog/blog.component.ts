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
  Blogcategory = new Set<string>();

  Blogs = [] as any;
  filteredbycategory = [] as any;
  blogtab = [] as any;
  arrayupdate = [];
 

  constructor(
    private router: Router,
    private webflow: WebflowserviceService,
    private route: ActivatedRoute
  ) { }

  readart(id: string) {
    console.log(id);
    this.router?.navigate([`/readarticle/${id}`]);
  }

  ngOnInit(): void {
    Aos.init({
      duration: 3500,
    });
    this.blog();
  }

  blog() {
    this.subscription = this.webflow
      .getData('allitems/6375d4747684b45e464ccf77')
      .subscribe({
        next: (update: any) => {
          console.log(update);

          this.Blogs = this.filteredbycategory = update.data;
         

          this.Blogs.forEach((element: any) => {
            element.imageurl = element['post-main-image'].url;
            element.date = element['updated-on']
            let catId = element['post-category-2'];
            let itemid = element['post-author']
            console.log(catId);
            this.blogcategory(catId, element);
            this.getAuthorDetails(itemid, element);
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
      .getData(`blogcategoryitembyid/${itemid}`)
      .subscribe({
        next: (res: any) => {
          console.log(res);

          ref.category = res.data.name;
          this.Blogcategory.add(res.data.name);
        },
        error: (reason: any) => console.log(reason),
      });
  }

  blogFilter(element?: string) {
    if (element) {
      // console.log(element);
      this.filteredbycategory = this.Blogs.filter(
        (el: { category: string }) => el.category === element
      );
    } else {
      // console.log("All");
      this.filteredbycategory = this.Blogs;
    }
  }
  getAuthorDetails(item: string, ref: any) {
    this.subscription = this.webflow
      .getData(`temmemberitembyid/${item}`)
      .subscribe({
        next: (update: any) => {
          console.log(update);
          ref.profileName = update.data.name
        }
      })
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
