
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
  Jobcategory = new Set<string>()

  getCareerItemById: any;
  Careers = {} as any
  filteredJobOpening = [] as any
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
  
  // function to navigate for the id
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
    this.getJobOpenings();

    // this.Jobcategory.forEach(value =>{
    //   console.log(value);               //Prints 1 2 3 4 5 6
    // });


    // this.route.paramMap.subscribe((params:ParamMap)=>+)
  }


  //function to call carrer by id
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


  //function for id
  getJobCategory(itemid: string, res: any) {
    this.subscription = this.webflow.getData(`careercategoriesitembyid/${itemid}`).subscribe({
      next: (data: any) => {
        res.category = data.data.name
        this.Jobcategory.add(data.data.name)
      },
      error: (reason: any) => console.log(reason)
    });
  }


  // function for allitems id 
  getJobOpenings() {
    this.subscription = this.webflow.getData("allitems/6375d4747684b4ac2c4ccf78").subscribe({
      next: (response: any) => {
        console.log(response);
        let data = response.data
        this.jobtab = this.filteredJobOpening = response.data
        this.jobtab.forEach(
          (element: any) => {
            let id = Object(element)["career-job-category"] as string
            this.getJobCategory(id, element)
          });
        console.log(this.jobtab)

      },
      error: (reason: any) => {
        console.error(reason);
      }
    });
  }

//function for filtering data
  jobFilter(element?: string) {
    if (element) {
      // console.log(element);
      this.filteredJobOpening = this.jobtab.filter((el: { category: string; }) => el.category === element);

    }
    else {
      // console.log("All");
      this.filteredJobOpening = this.jobtab

    }


  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }


}





