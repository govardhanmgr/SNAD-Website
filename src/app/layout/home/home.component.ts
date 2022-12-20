import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';
import { GetintouchComponent } from 'src/app/shared/getintouch/getintouch.component';

import * as Aos from 'aos';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  subscription!: Subscription;
  casestudy = [] as any



  constructor(private router :Router,
    private webflow: WebflowserviceService) { }

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    })
    this.casestudies();
  }
  casestudies() {
    this.subscription = this.webflow.getData("allitems/6377559a25cdcb16c047617e").subscribe({
      next: (response: any) => {
        console.log(response);
        let data = response.data
          this.casestudy = response.data
      },
      error:(reason:any)=>{
        console.error(reason);  
      }
    });
  }
  ngOnDestroy():void{
    if (this.subscription){
      this.subscription.unsubscribe()
    }
  }

}
