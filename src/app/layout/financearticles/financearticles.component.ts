import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as Aos from 'aos';
import { Subscription } from 'rxjs/internal/Subscription';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';

@Component({
  selector: 'app-financearticles',
  templateUrl: './financearticles.component.html',
  styleUrls: ['./financearticles.component.css']
})
export class FinancearticlesComponent implements OnInit {
  subscription!: Subscription;
  finances = [] as any;

  constructor(
    private router: Router,
    private webflow: WebflowserviceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    Aos.init({
      duration: 500,
    })
  }
  
  async getprof() {
    this.route.paramMap.subscribe(async (params: Params) => {
      console.log(params['params'].itemid);
      this.finance(params['params'].itemid);

      //   this.webflow.getData().subscribe( data => {
      // })
    });
  }
  finance(itemid: any) {
    this.subscription = this.webflow
    .getData(`blogitembyid/${itemid}`)
    .subscribe({
      next: (res: any) => {
        console.log(res);
        let data = res.data;
        this.finances = res.data;
        const app = document.getElementById('app');
        const n = document.createElement('section');
        n.innerHTML = this.finances['job-description'];
        app?.append(n);
        const ap = document.getElementById('des');
        const p = document.createElement('section');
        p.innerHTML = this.finances['job-responsibilities'];
        ap?.append(p);
        const apps = document.getElementById('req');
        const r = document.createElement('section');
        r.innerHTML = this.finances['job-requirements'];
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
