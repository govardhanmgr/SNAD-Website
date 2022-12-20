import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { Subscription } from 'rxjs';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  subscription!: Subscription;

  getCareerItemById: any;
  jobtab = [] as any


  constructor(
    private router: Router,
    private webflow: WebflowserviceService
  ) { }

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    })
    this.jobtabs();
  
  }

  jobcategory(itemid: string, res: any) {

    this.subscription = this.webflow.getData(`careercategoriesitembyid/${itemid}`).subscribe({

      next: (data: any) => {
        res.category = data.data.name
      },
      error: (reason: any) => console.log(reason)
    });
  }

  jobtabs() {
    this.subscription = this.webflow.getData("allitems/6375d4747684b4ac2c4ccf78").subscribe({
      next: (response: any) => {
        console.log(response);
        let data = response.data
        this.jobtab = response.data
        this.jobtab.forEach(
          (element: any) => {
            let id = Object(element)["career-job-category"] as string
            this.jobcategory(id, element)
          });
        console.log(this.jobtab)
      },
      error: (reason: any) => {
        console.error(reason);
      }
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

}
