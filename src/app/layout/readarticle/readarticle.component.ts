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
  Readarticles =  {} as any;
  Article=[]as any;
  item!: string;

  constructor( private router:Router,
    private webflow:WebflowserviceService,
    private route: ActivatedRoute) { }

  



  ngOnInit(): void {
   this.getarticle();
   this.getblogs();
  }

  async getarticle() {
    this.route.paramMap.subscribe(async (params: Params) => {
      console.log(params['params'].itemid);
      this.item = params['params'].itemid;
      this.readarticle(params['params'].itemid);
      // this.blogcategory(this.item)
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
         
       
          let itemid = this.Readarticles['post-author']
          console.log(itemid)
          this.getAuthorDetails(itemid,this.Readarticles);
        
         
        this.Readarticles.imageurl = this.Readarticles['post-main-image'].url;
        this.Readarticles.postExcerpt = this.Readarticles['post-excerpt'];
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
          update.data.imageurlbig=update.data['team-profile-picture'].url
          update.data.smallimageurl=update.data['team-profile-picture-small'].url
          update.data.position=update.data['team-job-title']
          update.data.authorname=update.data['name']
          update.data.teamsummary=update.data['team-about-summary']
          update.data.date =  update.data['updated-on']
          ref.profile= update.data
          ref.profilename=update.data.name
        }
      })
    }
    
    blogcategory(itemid: string, ref: any) {
      this.subscription = this.webflow
        .getData(`blogcategoryitembyid/${itemid}`)
        .subscribe({
          next: (res: any) => {
            console.log(res);
            ref.categoryicon = res.data['blog-category-icon'].url
            ref.category = res.data.name;
            
            // this.Blogcategory.add(res.data.name);
          },
          error: (reason: any) => console.log(reason),
        });
    }

  getblogs() {
    this.subscription = this.webflow.getData("allitems/6375d4747684b45e464ccf77").subscribe({
      next: (response: any) => {
        console.log(response);
        let data = response.data;
        // data.forEach((element:any)=>{
        //   element.imageurl =element["post-main-image"].url
        //   element.postauthor=element["post-author"] 
        //   // element.icon = element['blog-category-icon']
        //   // let itemid=element['post-author']
        //   // this.getAuthorDetails(itemid, element);
        //   // let id=Object(element)["post-category-2"] as string
        //   // this.blogcategory(id,element)
        //   // element.date = element['updated-on']
        // })
        data.forEach((element:any)=>{
          element.imageurl =element["post-main-image"].url
          element.icon = element['blog-category-icon']
          let itemid=element['post-author']
          this.getAuthorDetails(itemid, element);
          let id = Object(element)["post-category-2"] as string
          this. blogcategory(id,element);
          element.date = element['updated-on']
        });
        console.log(data);
        
        let count=0;
        for(let i=0;i <= data.length;i++){
          if(count < 2){
            count++;
            this.Article.push(data[i]);
          }
          
        }
        console.log(this.Article);
        
      },
      error: (reason: any) => {
        console.error(reason);
      }
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }  

}
