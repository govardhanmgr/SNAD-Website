import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';
import { GetintouchComponent } from 'src/app/shared/getintouch/getintouch.component';

import * as Aos from 'aos';
import { Router } from '@angular/router';
import { SibComService } from 'src/app/services/sib-com.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  casestudy = [] as any;
  testimonial = {} as any;
  testimonialContents = [] as any;
  static = [] as any;
  home = [] as any;
  heroimage = [] as any;
  client =[] as any;
  case=[] as any;
  service=[] as any;

  constructor(
    private router: Router,
    private webflow: WebflowserviceService,
    private sibService: SibComService
  ) {}

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    });
    this.casestudies();
    // this.testimonials();
    //this.staticdata();
    // this.static=JSON.parse(localStorage.getItem('allitems/639c13606fb026c043712033')||'{}');
    // console.log(this.static)
    // this.home={
    //   home:parseInt(this.static)
    // }
    // console.log(this.home);

    this.getStaticdata();
  }

  casestudies() {
    this.subscription = this.webflow
      .getData('allitems/6377559a25cdcb16c047617e')
      .subscribe({
        next: (response: any) => {
          this.casestudy = response.data;
        },
        error: (reason: any) => {
          console.error(reason);
        },
      });
  }

  // testimonials() {
  //   this.subscription = this.webflow.getData("testmonialitembyid/639c187235742cc3c747f88e").subscribe({
  //     next: (response: any) => {
  //       console.log(response);

  //       this.testimonial = response.data
  //       this.testimonial.testmonialscontent.forEach((element: any) => {
  //         // let id = Object(element)["career-job-category"] as string
  //         this.testimonialContent(element)

  //       })
  //       console.log(this.testimonialContents);

  //     },
  //     error: (reason: any) => {
  //       console.error(reason);
  //     }
  //   });
  // }

  // testimonialContent(itemid: string) {
  //   this.subscription = this.webflow.getData(`testmonialscontentitembyid/${itemid}`).subscribe({
  //     next: (response: any) => {

  //       this.testimonialContents.push(response.data)

  //     },
  //     error: (reason: any) => {
  //       console.error(reason);
  //     }
  //   });
  // }
//  getStaticContent(){
//   let content:any = this.getStaticdata
//   let hero = content.filter((el: { page: string; sections: string;}) => el.page ==="4d1d25b65780e9a73fe777f3431ab3e2" && el.sections ==="1af9e7b1f68df63d6d09988bd947b2f8");
//   this.heroimage = hero
//   console.log(this.heroimage);
//  }
  getStaticdata() {
    this.subscription = this.webflow
      .getData('allitems/639c13606fb026c043712033')
      .subscribe({
        next: (response: any) => {
          console.log(response);
          let data = response.data;
          console.log(data);

         

          data.forEach((element: any) => {
            if (element['ref-collections']) {
              let rep: Array<string> = element['ref-collections'];
              let refres = new Array();
              rep.forEach((el) => {
                this.getReferenceData(el, refres);
              });
              element.refdata = refres;
              // this.getReferenceData(rep)
            }
          });
          console.log(data);
          let hero=data.filter((el: { page: string; sections: string;}) => el.page ==="4d1d25b65780e9a73fe777f3431ab3e2" && el.sections ==="1af9e7b1f68df63d6d09988bd947b2f8");
          this.heroimage=hero[0]  
          console.log(this.heroimage);
          let ourclient=data.filter((el:{page:string;sections:string})=>el.page ==="4d1d25b65780e9a73fe777f3431ab3e2"&&el.sections==="90b2fd6fca65b3c766e31d3d29e7137c");
          this.client=ourclient[0]
          console.log(this.client);
          let casestudies=data.filter((el:{page:string;sections:string})=>el.page==="4d1d25b65780e9a73fe777f3431ab3e2"&&el.sections==="d7189b7dcd3a9276ef1de3fa4d18f35a");
          this.case=casestudies[0]
          console.log(this.case);
          let services=data.filter((el:{page:string;sections:string})=>el.page==="4d1d25b65780e9a73fe777f3431ab3e2"&&el.sections==="b4fc5b9d84bac72485f37f58000fd549");
          this.service=services[0]
          console.log(this.service);
          


          this.sibService.sendData(data);
          //console.log(data);
          
          localStorage.setItem('staticcontent', JSON.stringify(data));
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  getReferenceData(itemId: string, res?: any) {
    this.subscription = this.webflow
      .getData(`referenceitembyid/${itemId}`)
      .subscribe({
        next: (response: any) => {
          res.push(response.data);
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
