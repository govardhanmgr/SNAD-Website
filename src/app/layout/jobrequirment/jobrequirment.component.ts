import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as Aos from 'aos';
import { Subscription } from 'rxjs';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';

@Component({
  selector: 'app-jobrequirment',
  templateUrl: './jobrequirment.component.html',
  styleUrls: ['./jobrequirment.component.css'],
})
export class JobrequirmentComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  jobopenings = [] as any;
  jobDescription={} as any
  item!: string;


  constructor(
    private router: Router,
    private webflow: WebflowserviceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    });
    this.getprofile();
    this.getjobopenig();
  }

//function for jobprofile 
  async getprofile() {
    this.route.paramMap.subscribe(async (params: Params) => {
      console.log(params['params'].itemid);
      this.item = params['params'].itemid;
      this.jobapplication(this.item);
    });
  }


//function for job application content 
  jobapplication(itemid: string) {
    this.subscription = this.webflow
      .getData(`careeritembyid/${itemid}`)
      .subscribe({
        next: (res: any) => {
          console.log(res);
           this.jobDescription = res.data;
           let id = Object(this.jobDescription)['career-job-category'] as string;
          this.getJobCategory(id, this.jobDescription);
          const app = document.getElementById('app');
          const n = document.createElement('section');
          n.innerHTML = this.jobDescription['job-description'];
          app?.append(n);
          const ap = document.getElementById('des');
          const p = document.createElement('section');
          p.innerHTML = this.jobDescription['job-responsibilities'];
          ap?.append(p);
          const apps = document.getElementById('req');
          const r = document.createElement('section');
          r.innerHTML = this.jobDescription['job-requirements'];
          apps?.append(r);
          
        },
        error: (reason: any) => {
          console.error(reason);
        },
      });
  }


// function to get career job category id information
  getJobCategory(itemid: string, res: any) {
    this.subscription = this.webflow.getData(`careercategoriesitembyid/${itemid}`).subscribe({
        next: (data: any) => {
          console.log(data);
          res.category = data.data.name;
          res.categorybutton=data.data.name;
        },
        error: (reason: any) => console.log(reason),
      });
  }

  
// function for getting the jobopenings
  getjobopenig() {
    this.subscription = this.webflow.getData('allitems/6375d4747684b4ac2c4ccf78').subscribe({
        next: (res: any) => {
          console.log(res);
          let data = res.data;
          data.forEach((element:any)=>{
            let id = Object(element)["career-job-category"] as string
            this.getJobCategory(id, element);
          });
          let count = 0;
          for (let i = 0; i <= data.length; i++) {
            if (data[i]['_id'] != this.item && count < 2) {
              count++;
              this.jobopenings.push(data[i]);
            }
          }
          
          console.log(this.jobopenings);
        },
        error: (reason: any) => console.log(reason),
      });
      
  }
      

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
