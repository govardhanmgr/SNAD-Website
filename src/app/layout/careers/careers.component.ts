import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  arrayresponse = [];
  


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
    private webflow: WebflowserviceService
  ) { }

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    })
    this.career();
   


  }
  career() {
    this.subscription = this.webflow.getData("careeritembyid/6375d4747684b4d78e4cd061").subscribe({
      next: (response: any) => {

        console.log(response);

        let data = response.data

        this.Careers = response.data
        const app =  document.getElementById('header') 
         const n =  document.createElement('section')
         n.innerHTML =this.Careers['job-description']
        app?.append(n)
        let id = Object(data)["career-job-category"] as string
        this.jobcategory(id)

      },
      error: (reason: any) => console.log(reason)
    });
  }
  jobcategory(itemid: string) {
    this.subscription = this.webflow.getData(`careercategoriesitembyid/${itemid}`).subscribe({
      next: (data: any) => {

        console.log(data)
      },
      error: (reason: any) => console.log(reason)
    });
  }
}
