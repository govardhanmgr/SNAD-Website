import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { Entry } from 'contentful';

import { CmsservicesService } from 'src/app/cmsservices.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

scroll(el: HTMLElement) {
 el.scrollIntoView({behavior: 'smooth'});
 }



  Abouts: Entry<any>[] = [];
  Ourpeoples: Entry<any>[] = [];

  constructor(private router: Router, private CmsservicesService: CmsservicesService) { }

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    })

    this.CmsservicesService.getAbouts()
      .then((About: Entry<any>[]) => {
        this.Abouts = About
        console.log(this.Abouts)
      });
    this.CmsservicesService.getOurpeoples()
      .then((Our: Entry<any>[]) => {
        this.Ourpeoples = Our
        console.log(this.Ourpeoples)
      })
  }
  // select(About:any){
  //   localStorage.getItem("",JSON.stringify(About) );
  //   this.router.navigate([""])
  // }

}
