import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'contentful';
import { CmsservicesService } from 'src/app/cmsservices.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  Abouts: Entry<any>[] = [];

  constructor(private router:Router,private CmsServicesService:CmsservicesService) { }

  ngOnInit(): void {
    this.CmsServicesService.getAbouts()
    .then(About=>{
      this.Abouts= About as Entry<any>[]
      console.log(this.Abouts)
    });
  }


}
