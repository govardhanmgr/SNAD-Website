import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';
import * as Aos from 'aos';
import { SibComService } from 'src/app/services/sib-com.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, OnDestroy {

        subscription!: Subscription
        services = [] as any
        Service= {} as object
        servimg = {} as any;
        impact = {} as any;

  constructor(
    private webflow: WebflowserviceService,
    private router: Router,
    private sibService:SibComService
  ) { }

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    })
      this.getServices();
     this.getStaticData();

  }

  getServices() {
       this.subscription = this.webflow.getData("allitems/637b427169bf648df141f346").subscribe({
        next:(response:any)=> {
          // console.log(response)
          this.services = response.data
          

          this.Service = this.services[0]
          console.log(this.Service);
          console.log(this.services)
        },
        error:(reason:any)=> {
          console.log(reason)
        }
       })

  }
  getStaticData(){
    let data:any = JSON.parse(localStorage.getItem("staticcontent") || '[]');
    console.log(data);
    let herodata= data.filter((el: { page: string; sections:string;}) => el.page === 'bef1dac0a23768a78a533e40535f9055' && el.sections === '1af9e7b1f68df63d6d09988bd947b2f8');
    this.servimg=herodata[0]
    console.log(this.servimg);
    let impactfull= data.filter((el: { page: string; sections:string;}) => el.page === "b02282ae3855aff3baab318770f8c16f" && el.sections === '8808845a39d7b7b5ca84bdd8458f738a');
    this.impact=impactfull[0]
    this.sibService.getReferenceCollections(this.impact)
    console.log(this.impact);
        

  }
  postServiceFunction(service:object){
    this.Service = service



  }



  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

}
