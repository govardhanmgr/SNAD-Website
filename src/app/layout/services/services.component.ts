import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';
import * as Aos from 'aos';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

        subscription!: Subscription
        services = [] as any

  constructor(
    private webflow: WebflowserviceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    })
      this.getServices()
  }
    
  getServices() {
       this.subscription = this.webflow.getData("allitems/637b427169bf648df141f346").subscribe({
        next:(response:any)=> {
          console.log(response)
          this.services = response.data
          console.log(this.services)
        },
        error:(reason:any)=> {
          console.log(reason)
        }
       })
       
  }
}
