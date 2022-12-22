import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { Entry } from 'contentful';
import { Subscription } from 'rxjs';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  Abouts = [] as any
  getProfileItemById: any;

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  profileid(id: string) {
    console.log(id);
    this.router?.navigate([`/profile/${id}`])
  }

  constructor(private router: Router,
    private webflow: WebflowserviceService) { }

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    })
    this.About()
  }

  individualprofile(itemid: string, res: any) {

    this.subscription = this.webflow.getData(`temmemberitembyid/${itemid}`).subscribe({

      next: (data: any) => {
        res.category = data.data.name
      },
      error: (reason: any) => console.log(reason)
    });
  }

  About() {
    this.subscription = this.webflow.getData("allitems/6375d4747684b46aeb4ccf75").subscribe({
      next: (response: any) => {

        console.log(response);

        this.Abouts = response.data

        this.Abouts.forEach(
          (element: any) => {
            element.imageurl = element['team-profile-picture'].url
          });
          console.log(this.Abouts);
          
        const app = document.getElementById('app')
        const n = document.createElement('section')
        n.innerHTML = this.Abouts['team-about']
        // app?.append(n)
        // let id = Object(data)["career-job-category"] as string
        // this.jobcategory(id)

      },
      error: (reason: any) => console.log(reason)
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }


}
