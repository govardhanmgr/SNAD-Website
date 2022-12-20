import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { Subscription } from 'rxjs';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  subscription!: Subscription;
  profile = {} as any;
  constructor(
    private router: Router,
    private webflow: WebflowserviceService
  ) { }

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    })
    this.getProfile();
  }
  getProfile() {
    this.subscription = this.webflow.getData("temmemberitembyid/6375d4747684b419fb4cd0e0").subscribe({
      next: (response: any) => {
        console.log(response);
        let data = response.data
        this.profile = response.data
        const app =  document.getElementById('app') 
          const n =  document.createElement('section')
          n.innerHTML =this.profile['team-about']
         app?.append(n)
         const des =  document.getElementById('des') 
          const p =  document.createElement('section')
          p.innerHTML =this.profile['team-past-experience-2']
         des?.append(p)
        // this.Profile.forEach(
        //   (element: any) => {
        //     let id = Object(element)["career-job-category"] as string
        //     this.jobcategory(id, element)
        //   });
        console.log(this.profile)
      },
      error: (reason: any) => {
        console.error(reason);
      }
    });
  }
}
