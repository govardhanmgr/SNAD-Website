import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { SibComService } from 'src/app/services/sib-com.service';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';

@Component({
  selector: 'app-subservice',
  templateUrl: './subservice.component.html',
  styleUrls: ['./subservice.component.css']
})
export class SubserviceComponent implements OnInit {

  impactfullnumbers = {} as any
  subscription!:Subscription
  item!:string;
  subServices = [] as any
  serviceDetails = {} as any
  casestudies=[] as any
  casestatic = [] as any
  impact = [] as any
  getin = [] as any
  sub = [] as any

  constructor(
    private _Activatedroute: ActivatedRoute,
    private webflow:WebflowserviceService,
    private sibservice: SibComService
  ) { }

  ngOnInit(): void {
    this.impactfullnumbers = {
      shorttext: "We have impactfull Numbers",
      numbers: [
        {
          shortnumber: "98",
          icon: "%",
          text: "Customer satisfaction"
        },
        {
          shortnumber: "205",
          icon: "M",
          text: "Monthly active users"
        },
        {
          shortnumber: "100",
          icon: "K",
          text: "New users per week"
        },
        {
          shortnumber: "55",
          icon: "%",
          text: "Growth year-over-year"
        },
      ]
    }
    this.getItemIdFromParams()
    this.getAllSubService()
    this.getStaticData()
    this.getCaseStudiesData()
  }

  getItemIdFromParams() {
    this._Activatedroute.paramMap.subscribe((params: Params) => {
      console.log(params['params'].itemid);
      this.getServiceDetailsById(params['params'].itemid)
      this.item = params['params'].itemid;
    
    })
  }

  getServiceDetailsById(itemid: string) {
    this.subscription = this.webflow
    .getData(`servicedetailsitembyid/${itemid}`)
    .subscribe({
      next: (response: any) => {
        console.log(response);
        this.serviceDetails =  response.data
       
  },
  error: (reason: any) => {
    console.error(reason);
  }
 });
}
 getAllSubService(){
  this.subscription = this.webflow.getData("allitems/637b5d25cf7e15753a05b6af").subscribe({
    next: (response: any) => {

      console.log(response);
      this.subServices=response.data.filter((el:any)=>el['main-service']===this.item)
      console.log(this.subServices);
      
      // this.subservice = response.data


     
    },
    error: (reason: any) => console.log(reason)
  });
}

 getStaticData(){
  let data:any = JSON.parse(localStorage.getItem("staticcontent") || '[]');
  console.log(data);
  let studies = data.filter((el: { page: string; sections:string;}) => el.page === 'bef1dac0a23768a78a533e40535f9055' && el.sections === 'd7189b7dcd3a9276ef1de3fa4d18f35a');
  this.casestatic= studies[0]
  console.log(this.casestatic);
  let impactfullnumbers = data.filter((el:{page:string; sections: string;})=> el.page ==='bef1dac0a23768a78a533e40535f9055' && el.sections === '8808845a39d7b7b5ca84bdd8458f738a' );
    this.impact=impactfullnumbers[0]
    this.sibservice.getReferenceCollections(this.impact)
    console.log(this.impact);
  let touch= data.filter((el: { page: string; sections:string;}) => el.page === 'bef1dac0a23768a78a533e40535f9055' && el.sections === '0bfa29ba0aa07a1768475c5c337d29c5');
    this.getin=touch[0]
    console.log(this.getin);
    let service=data.filter((el: { page:string; sections:string}) => el.page === 'bef1dac0a23768a78a533e40535f9055' && el.sections ==='51cbe8b2c03d1a31b3246608f50a5056');
    this.sub=service[0]
    console.log(this.sub);
}
//casestudies
 getCaseStudiesData(){
  this.subscription = this.webflow
  .getData("allitems/6377559a25cdcb16c047617e")
  .subscribe({
    next: (response: any) => {
      console.log(response);
      this.casestudies=response.data
      // this.serviceDetails =  response.data
     
},
error: (reason: any) => {
  console.error(reason);
}
});
}

}
