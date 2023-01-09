import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
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
  client =  {} as any;
  case = [] as any;
  service = [] as any;
  subService =[] as any;
  impactfull = { } as any;
  getintouch = {} as any;
  joinourteam = {} as any;
  testimonials = {} as any;
  

  constructor(
    private router: Router,
    private webflow: WebflowserviceService,
    private sibService: SibComService,

  ) { }


  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    });
    this.casestudies();

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

  
  // }


  async getStaticdata() {

    this.subscription = this.webflow
      .getData('allitems/639c13606fb026c043712033')
      .subscribe({
        next: async (response: any) => {
          // console.log(response);
          let data = response.data;





          console.log(data);
          let hero = data.filter((el: { page: string; sections: string; }) => el.page === "4d1d25b65780e9a73fe777f3431ab3e2" && el.sections === "1af9e7b1f68df63d6d09988bd947b2f8");
          this.heroimage = hero[0]
          console.log(this.heroimage);
          let ourclient = data.filter((el: { page: string; sections: string }) => el.page === "4d1d25b65780e9a73fe777f3431ab3e2" && el.sections === "90b2fd6fca65b3c766e31d3d29e7137c");
          this.client = ourclient[0]
          this.sibService.getReferenceCollections(this.client)
          console.log(this.client);
          let casestudies = data.filter((el: { page: string; sections: string }) => el.page === "4d1d25b65780e9a73fe777f3431ab3e2" && el.sections === "d7189b7dcd3a9276ef1de3fa4d18f35a");
          this.case = casestudies[0]
          this.sibService.getReferenceCollections(this.case)
          console.log(this.case);
          let services = data.filter((el: { page: string; sections: string }) => el.page === "4d1d25b65780e9a73fe777f3431ab3e2" && el.sections === "b4fc5b9d84bac72485f37f58000fd549");
          this.service = services[0]
          this.getSubServices(this.service)
          
          console.log(this.service);
          let impactfullnumbers = data.filter((el:{page:string; sections: string;})=> el.page ==='4d1d25b65780e9a73fe777f3431ab3e2' && el.sections === '8808845a39d7b7b5ca84bdd8458f738a' );
          this.impactfull=impactfullnumbers[0]
          this.sibService.getReferenceCollections(this.impactfull)
          console.log(this.impactfull);
          let cta2=data.filter((el:{page:string; sections: string;})=> el.page ==='4d1d25b65780e9a73fe777f3431ab3e2' && el.sections ==='0bfa29ba0aa07a1768475c5c337d29c5');
          this.getintouch=cta2[0]
          console.log(this.getintouch)
          let cta1 =data.filter((el:{page:string; sections: string}) => el.page ==='4d1d25b65780e9a73fe777f3431ab3e2' && el.sections ==='3fbc50998d0dc0874279c27d99b393e2');
          this.joinourteam=cta1[0]
          console.log(this.joinourteam)
          let hometestimonials = data.filter((el:{page:string; sections: string;})=> el.page ==='4d1d25b65780e9a73fe777f3431ab3e2' && el.sections === '0041959d64a25b99fda9f04eee126fd5' );
          this.testimonials=hometestimonials[0]
          this.sibService.getReferenceCollections(this.testimonials)
          console.log(this.testimonials);
          //console.log(data);


          // console.log(data);

          // console.log(data);

          localStorage.setItem('staticcontent', JSON.stringify(data));

          // await data.forEach(async (element: any) => {
          //   if (element['ref-collections']) {
          //     let rep: Array<string> = element['ref-collections'];
          //     let refres = new Array();
          //      await rep.forEach(async (el) => {
          //      await this.getReferenceData(el, refres);
          //     });
          //     element.refdata =refres ;
          //   // this.getReferenceData(rep)
          //   }
          // });
          // console.log("output",data);
        },
        error: (err) => {
          console.log(err);
        },
      });


  }

  getSubServices(obj:any) {
    this.subscription =this.webflow.getData("allitems/637b427169bf648df141f346").subscribe({
      next:(response: any) => {
       
         
        let data = response.data
        data.filter((element:any)=>{
          element.imageurl=element['icon-image'].url
        })
        console.log(data);

        obj.subServices = data
        
      },
      error:(reason: any) => {
        console.error(reason);
      }

    });

  }


  // async getReferenceData(itemId: string, res?: any) {
  //    this.subscription =  this.webflow
  //     .getData(`referenceitembyid/${itemId}`)
  //     .subscribe({
  //       next: (response: any) => {

  //         res.push(response.data);




  //       },
  //       error: (reason: any) => {
  //         console.error(reason);
  //       },
  //     });
  // }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
