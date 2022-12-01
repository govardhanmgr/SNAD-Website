import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmsservicesService } from 'src/app/cmsservices.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private router:Router ,private CmsservicesService:CmsservicesService ) { }

  ngOnInit(): void {
  }

}
