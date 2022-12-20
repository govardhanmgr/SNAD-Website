import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { Subscription } from 'rxjs';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';

@Component({
  selector: 'app-jobrequirment',
  templateUrl: './jobrequirment.component.html',
  styleUrls: ['./jobrequirment.component.css']
})
export class JobrequirmentComponent implements OnInit {
  subscription!: Subscription;
  jobs ={} as any


  constructor(private router: Router,
    private webflow: WebflowserviceService) { }

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    })
    this.job();
  }

   job(){
    this.subscription = this.webflow.getData("allitems/6375d4747684b4ac2c4ccf78").subscribe({
      next: (res: any) => {
        console.log(res);
        let data = res.data
          this.jobs= res.data
      },
      error:(reason:any)=>{
        console.error(reason);  
      }
    });
   }


}
