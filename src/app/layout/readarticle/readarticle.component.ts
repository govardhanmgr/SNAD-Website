import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';

@Component({
  selector: 'app-readarticle',
  templateUrl: './readarticle.component.html',
  styleUrls: ['./readarticle.component.css']
})
export class ReadarticleComponent implements OnInit {
  subscription!: Subscription;
  readarticles = [] as any
  arrayupdate =[];

  constructor( private router:Router,
    private webflow:WebflowserviceService) { }

  



  ngOnInit(): void {
this. readarticle();
  }

  

  readarticle(){
    this.subscription=this.webflow.getData("allitems/6375d4747684b45e464ccf77").subscribe({
      next: (read:any)=> {
        console.log(read);
  
        this.readarticles = read.data
  
        this.readarticles.forEach(
          (element: any) => {
            element.imageurl = element['post-main-image'].url
          });
          console.log(this.readarticles);
  
        let data = read.data
         this.readarticles = read.data
         
        const app = document.getElementById('des')
         const add = document.getElementById('title')
        const n =  document.createElement('section')
        const p =  document.createElement('section')
           n.innerHTML =this.readarticles[0]['post-body']
           p.innerHTML =this.readarticles[0]['name']
         app?.append(n)
          add?.append(p)
  
      },
      error: (reason: any) => console.log(reason)
    });

  }
    
  
        
        

}
