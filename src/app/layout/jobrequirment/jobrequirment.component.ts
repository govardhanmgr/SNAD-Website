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
  }

  async getprof() {
    this.route.paramMap.subscribe(async (params: Params) => {
      console.log(params['params'].itemid);
      this.job(params['params'].itemid);

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
          let data = res.data;
          this.jobs = res.data;
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

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
