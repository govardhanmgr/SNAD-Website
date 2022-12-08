import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { CmsservicesService } from 'src/app/cmsservices.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private router:Router ,private CmsservicesService:CmsservicesService ) { }

  ngOnInit(): void {
    Aos.init({
      duration: 500,
    })
  
  }

}
