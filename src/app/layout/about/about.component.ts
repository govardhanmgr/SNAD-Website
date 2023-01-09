import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { Entry } from 'contentful';
import { Subscription } from 'rxjs';
import { SibComService } from 'src/app/services/sib-com.service';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  Abouts = [] as any
  static = {} as any
  getProfileItemById: any;
  impact = {} as any;
  heroimg = {} as any;
  ourmissionv = {} as any;
  ourteam={} as any;
  ourvalue={} as any;
  getin={} as any;

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  profileid(id: string) {
    console.log(id);
    this.router?.navigate([`/profile/${id}`])
  }

  constructor(private router: Router,
    private webflow: WebflowserviceService ,
    private sibService:SibComService) { }

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    })
    this.About()
   
    // this.heroimg= {
      
        
    //    heading:"About",
    //    text:"Fostering Technology Innovation As A Service though our Strong Leadership",
    //    smalltext:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur tortor nunc aliquam consectetur semper augue at.",
    //    image:"./assets/p-2000.jpeg",
    //    istrustedcompanies:false

     
    // }
   this.getStaticData();
  }

  individualprofile(itemid: string, res: any) {

    this.subscription = this.webflow.getData(`temmemberitembyid/${itemid}`).subscribe({

      next: (data: any) => {
        res.category = data.data.name
      },
      error: (reason: any) => console.log(reason)
    });
  }


   getStaticData(){
    let data:any = JSON.parse(localStorage.getItem("staticcontent") || '[]');
    console.log(data);
    
    let ourstory = data.filter((el: { page: string; sections:string;}) => el.page === 'b02282ae3855aff3baab318770f8c16f'&& el.sections === '1bec51b350b32812b859b57a4af4b50f');
    this.static = ourstory[0]
    // console.log(this.static);

    let ourmission = data.filter((el: { page: string; sections:string;}) =>el.page ==='b02282ae3855aff3baab318770f8c16f'&& el.sections ==='25cf67eb7c9fa99025ee0979e9546aaf');
    this.ourmissionv=ourmission[0]
    console.log(ourmission);

    let herodata= data.filter((el: { page: string; sections:string;}) => el.page === 'b02282ae3855aff3baab318770f8c16f' && el.sections === '1af9e7b1f68df63d6d09988bd947b2f8');
    this.heroimg=herodata[0]
    //console.log(this.heroimg);
    
    let team= data.filter((el: { page: string; sections:string;}) => el.page === 'b02282ae3855aff3baab318770f8c16f' && el.sections === '1a4e666444ab7129d11c0faa842acc40');
    this.ourteam=team[0]
    console.log(this.ourteam);

    let value= data.filter((el: { page: string; sections:string;}) => el.page === 'b02282ae3855aff3baab318770f8c16f' && el.sections === '7bccae48fc342f81b0faf390282e8c62');
    this.ourvalue=value[0]
    this.sibService.getReferenceCollections(this.ourvalue)
    console.log(this.ourvalue);
    
    
    let touch= data.filter((el: { page: string; sections:string;}) => el.page === 'b02282ae3855aff3baab318770f8c16f' && el.sections === '3fbc50998d0dc0874279c27d99b393e2');
    this.getin=touch[0]
    console.log(this.getin);
    

    let impactfull= data.filter((el: { page: string; sections:string;}) => el.page === "b02282ae3855aff3baab318770f8c16f" && el.sections === '8808845a39d7b7b5ca84bdd8458f738a');
    this.impact=impactfull[0]
    this.sibService.getReferenceCollections(this.impact)
    console.log(this.impact);
        

    
   }


  About() {
    this.subscription = this.webflow.getData("allitems/6375d4747684b46aeb4ccf75").subscribe({
      next: (response: any) => {

        console.log(response);

        this.Abouts = response.data

        this.Abouts.forEach(
          (element: any) => {
            element.imageurl = element['team-profile-picture'].url
          });
        console.log(this.Abouts);

        const app = document.getElementById('app')
        const n = document.createElement('section')
        n.innerHTML = this.Abouts['team-about']
        // app?.append(n)
        // let id = Object(data)["career-job-category"] as string
        // this.jobcategory(id)

      },
      error: (reason: any) => console.log(reason)
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

}
