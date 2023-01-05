import { Component,Input,OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';

@Component({
  selector: 'app-servicescards',
  templateUrl: './servicescards.component.html',
  styleUrls: ['./servicescards.component.css']
})
export class ServicescardsComponent implements OnInit {
  subscription!: Subscription;
  subService =[] as any;

  constructor(private router: Router,
    private webflow: WebflowserviceService) { }
    @Input() service!:any

  ngOnInit(): void {
    this.subServices();
  }
  subServices() {
    this.subscription =this.webflow.getData("allitems/637b427169bf648df141f346").subscribe({
      next:(response: any) => {
       
        console.log(response);
        this.subService = response.data
      },
      error:(reason: any) => {
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
