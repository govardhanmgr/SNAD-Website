import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faRupiahSign } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { SibComService } from 'src/app/services/sib-com.service';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';

@Component({
  selector: 'app-subservices',
  templateUrl: './subservices.component.html',
  styleUrls: ['./subservices.component.css']
})
export class SubservicesComponent implements OnInit {
   
  subscription!: Subscription
   subservice = {} as any;
  @Input() serviceDetails!:any
  

  constructor( private webflow: WebflowserviceService,
    private router: Router,
    private sibService:SibComService) { }

  ngOnInit(): void {
    console.log(this.serviceDetails);
    this.getSubService();
  }
  getSubService(){
    this.subscription = this.webflow.getData("allitems/637b5d25cf7e15753a05b6af").subscribe({
      next: (response: any) => {

        console.log(response);
        this.subservice = response.data


       
      },
      error: (reason: any) => console.log(reason)
    });
  }

postServiceRoute(item:string){
  this.router.navigate([`subservice/${item}`])
}

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

}
