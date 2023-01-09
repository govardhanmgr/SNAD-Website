import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as Aos from 'aos';
import { elementAt, Subscription } from 'rxjs';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  subscription!: Subscription;
  profile = {} as any;
  Blogs = [] as any;
 
  item!: string;
  
  constructor(
    private router: Router,
    private webflow: WebflowserviceService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    })
    this.getprofilebyid();
    this.getblogs();
  }

  getprofilebyid() {
    this.route.paramMap.subscribe((params: Params) => {
      console.log(params['params'].itemid);
      this.item = params['params'].itemid;
      this.getProfile(this.item);
      //   this.webflow.getData().subscribe( data => {
      // })
    });
  }

  getProfile(itemid: string) {
    this.subscription = this.webflow
      .getData(`temmemberitembyid/${itemid}`)
      .subscribe({
        next: (response: any) => {
          console.log(response);
         
          this.profile = response.data
          const app = document.getElementById('app')
          const n = document.createElement('section')
          n.innerHTML = this.profile['team-about']
          app?.append(n)
          const des = document.getElementById('des')
          const p = document.createElement('section')
          p.innerHTML = this.profile['team-past-experience-2']
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

  blogcategory(itemid: string, ref: any) {
    this.subscription = this.webflow
      .getData(`blogcategoryitembyid/${itemid}`)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          ref.category = res.data.name;
          
        },
        error: (reason: any) => console.log(reason),
      });
  }

  getAuthorDetails(item: string, ref: any) {
    this.subscription = this.webflow.getData(`temmemberitembyid/${item}`).subscribe({
        next: (res: any) => {
          console.log(res);
          ref.profileName = res.data.name
          
        }
      })
  }
  getblogs() {
    this.subscription = this.webflow.getData("allitems/6375d4747684b45e464ccf77").subscribe({
      next: (response: any) => {
        console.log(response);
        let data = response.data;
        data.forEach((element:any)=>{
          element.imageurl =element["post-main-image"].url
          element.postauthor=element["post-author"] 
          let itemid=element['post-author']
          this.getAuthorDetails(itemid, element);
          let id=Object(element)["post-category-2"] as string
          this.blogcategory(id,element)
          element.date = element['updated-on']
        })
        let latest=data.filter((el:{postauthor:string; })=>el.postauthor === this.item )
         console.log(latest);
        let count=0;
        for(let i=0;i <= latest.length;i++){
          if(count < 2){
            count++;
            this.Blogs.push(latest[i]);
          }
          
        }
        console.log(this.Blogs);
        
      },
      error: (reason: any) => {
        console.error(reason);
      }
    });
  }

  articles(){
    
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

