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
  jobs = [] as any;
  jobopen = {} as any;
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
    this.getprof();
    this.getjobed();
  }

  async getprof() {
    this.route.paramMap.subscribe(async (params: Params) => {
      console.log(params['params'].itemid);
      this.item = params['params'].itemid;
      this.job(this.item);

      //   this.webflow.getData().subscribe( data => {
      // })
    });
  }

  job(itemid: string) {
    this.subscription = this.webflow
      .getData(`careeritembyid/${itemid}`)
      .subscribe({
        next: (res: any) => {
          console.log(res);

          this.jobs = res.data;
          let id = Object(this.jobs)['career-job-category'] as string;
          this.getJobCategory(id, this.jobs);

          const app = document.getElementById('app');
          const n = document.createElement('section');
          n.innerHTML = this.jobs['job-description'];
          app?.append(n);
          const ap = document.getElementById('des');
          const p = document.createElement('section');
          p.innerHTML = this.jobs['job-responsibilities'];
          ap?.append(p);
          const apps = document.getElementById('req');
          const r = document.createElement('section');
          r.innerHTML = this.jobs['job-requirements'];
          apps?.append(r);
        },
        error: (reason: any) => {
          console.error(reason);
        },
      });
  }

  getJobCategory(itemid: string, res: any) {
    this.subscription = this.webflow
      .getData(`careercategoriesitembyid/${itemid}`)
      .subscribe({
        next: (data: any) => {
          res.category = data.data.name;
        },
        error: (reason: any) => console.log(reason),
      });
  }

  getjobed() {
    this.subscription = this.webflow
      .getData('allitems/6375d4747684b4ac2c4ccf78')
      .subscribe({
        next: (res: any) => {
          console.log(res);
          let data = res.data;
          let count = 0;
          for (let i = 0; i <= data.length; i++) {
            if (data[i]['_id'] != this.item && count < 2) {
              count++;
              this.jobopen = data[i];
              console.log(this.jobopen);
            }
          }
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
