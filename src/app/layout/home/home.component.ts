import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit,OnDestroy {
  subscription!: Subscription;
  casestudy = [] as any
  testimonial = {} as any
  testimonialContents = [] as any



  constructor(private router :Router,
    private webflow: WebflowserviceService) { }

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    })
    this.casestudies();
    this.testimonials()
  }
  casestudies() {
    this.subscription = this.webflow.getData("allitems/6377559a25cdcb16c047617e").subscribe({
      next: (response: any) => {
        console.log(response);
        
          this.casestudy = response.data
      },
      error:(reason:any)=>{
        console.error(reason);  
      }
    });
  }
 
  testimonials() {
    this.subscription = this.webflow.getData("testmonialitembyid/639c187235742cc3c747f88e").subscribe({
      next: (response: any) => {
        console.log(response);
        
          this.testimonial = response.data
          this.testimonial.testmonialscontent.forEach((element:any)=>{
            // let id = Object(element)["career-job-category"] as string
            this.testimonialContent(element)
            

          })
          console.log(this.testimonialContents);
          
      },
      error:(reason:any)=>{
        console.error(reason);  
      }
    });
  }
  
  testimonialContent(itemid:string) {
    this.subscription = this.webflow.getData(`testmonialscontentitembyid/${itemid}`).subscribe({
      next: (response: any) => {
       
        this.testimonialContents.push(response.data)
      
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
 


