
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Aos from 'aos';
import { Subscription } from 'rxjs';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  subscription!: Subscription;

  getCareerItemById: any;
  Careers = {} as any
  jobtab = [] as any
  // arrayresponse = [];



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

  jobReq(id: string) {
    console.log(id);
    this.router?.navigate([`/jobrequirement/${id}`])
  }

  constructor(
    private router: Router,
    private webflow: WebflowserviceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    })
    this.career();
    this.jobtabs();
    // this.route.paramMap.subscribe((params:ParamMap)=>+)
  }
  career() {
    this.subscription = this.webflow.getData("careeritembyid/6375d4747684b4d78e4cd061").subscribe({
      next: (response: any) => {

        console.log(response);

        let data = response.data

        this.Careers = response.data
        const app = document.getElementById('app')
        const n = document.createElement('section')
        n.innerHTML = this.Careers['job-description']
        app?.append(n)
        let id = Object(data)["career-job-category"] as string


      },
      error: (reason: any) => console.log(reason)
    });
  }

  jobcategory(itemid: string, res: any) {

    this.subscription = this.webflow.getData(`careercategoriesitembyid/${itemid}`).subscribe({

      next: (data: any) => {
        res.category = data.data.name
      },
      error: (reason: any) => console.log(reason)
    });
  }

  jobtabs() {
    this.subscription = this.webflow.getData("allitems/6375d4747684b4ac2c4ccf78").subscribe({
      next: (response: any) => {
        console.log(response);
        let data = response.data
        this.jobtab = response.data
        this.jobtab.forEach(
          (element: any) => {
            let id = Object(element)["career-job-category"] as string
            this.jobcategory(id, element)
          });
        console.log(this.jobtab)
      },
      error: (reason: any) => {
        console.error(reason);
      }
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }


}





