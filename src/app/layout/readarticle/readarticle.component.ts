import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';

@Component({
  selector: 'app-readarticle',
  templateUrl: './readarticle.component.html',
  styleUrls: ['./readarticle.component.css']
})
export class ReadarticleComponent implements OnInit {
  subscription!: Subscription;
  Readarticles = [] as any;

  constructor( private router:Router,
    private webflow:WebflowserviceService,
    private route: ActivatedRoute) { }

  



  ngOnInit(): void {
   this.getarticle();
  }

  async getarticle() {
    this.route.paramMap.subscribe(async (params: Params) => {
      console.log(params['params'].itemid);
      this.readarticle(params['params'].itemid);
    });
  }

  

  readarticle(itemid: string){
    this.subscription=this.webflow
    .getData(`blogitembyid/${itemid}`)
    .subscribe({
      next: (read:any)=> {
         console.log(read);
  
        let data = read.data;
         this.Readarticles = read.data;

         
        //  this.Readarticles.forEach((element: any) => {
        //   let itemid = element['post-author']
        //   this.getAuthorDetails(itemid,element);
        // });

         

         
        this.Readarticles.imageurl = this.Readarticles['post-main-image'].url;
        // this.Readarticles.imageurlSmallProfile = this.Readarticles['team-profile-picture'].url;
        const app = document.getElementById('des');
        const n =  document.createElement('section');
        n.innerHTML =this.Readarticles['post-body'];
        app?.append(n);
         const add = document.getElementById('title');
         const p =  document.createElement('section');
           p.innerHTML =this.Readarticles['name'];
          add?.append(p)
      },
      error: (reason: any) => { console.log(reason);
      },
    });

  } 
  
  getAuthorDetails(item :string ,  ref:any){
    this.subscription = this.webflow
      .getData(`temmemberitembyid/${item}`)
      .subscribe({
        next: (update: any) => {
          console.log(update);
          
        }
      })
    }
    
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }  

}
