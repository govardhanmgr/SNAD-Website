
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Aos from 'aos';
import { Subscription } from 'rxjs';
import { SibComService } from 'src/app/services/sib-com.service';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  subscription!: Subscription;
  Jobcategory = new Set<string>()

  getCareerItemById: any;
  Careers = {} as any;
  filteredJobOpening = [] as any;
  jobtab = [] as any;
  Staticdata = {} as any;
  heroimage = {} as any;
  corevalues = {} as any;
  companyperks = {} as any;
  growth = {} as any;
  one = {} as any;
  position = {} as any;


  // arrayresponse = [];
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  
  // function to navigate for the id
  jobReq(id: string) {
    console.log(id);
    this.router?.navigate([`/jobrequirement/${id}`])
  }

  constructor(
    private router: Router,
    private webflow: WebflowserviceService,
    private route: ActivatedRoute,
    private sibservice:SibComService,
  ) { }

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    })
    this.career();
    this.getJobOpenings();
    this.getStaticData();

    // this.Jobcategory.forEach(value =>{
    //   console.log(value);               //Prints 1 2 3 4 5 6
    // });

    // this.route.paramMap.subscribe((params:ParamMap)=>+)
  //  let data:any = JSON.parse(localStorage.getItem("staticcontent") || '[]');
  //  console.log(data);
   

  }


  //function to call carrer by id
  career() {
    this.subscription = this.webflow.getData("careeritembyid/6375d4747684b4d78e4cd061").subscribe({
      next: (response: any) => {
        console.log(response);
        let data = response.data
        this.Careers = response.data
        const app = document.getElementById('app')
        const n = document.createElement('section')
        n.innerHTML = this.Careers['job-description']
        app?.append(n)
        let id = Object(data)["career-job-category"] as string
      },
      error: (reason: any) => console.log(reason)
    });
  }


  //function for id
  getJobCategory(itemid: string, res: any) {
    this.subscription = this.webflow.getData(`careercategoriesitembyid/${itemid}`).subscribe({
      next: (data: any) => {
        res.category = data.data.name
        this.Jobcategory.add(data.data.name)
      },
      error: (reason: any) => console.log(reason)
    });
  }


  // function for allitems id 
  getJobOpenings() {
    this.subscription = this.webflow.getData("allitems/6375d4747684b4ac2c4ccf78").subscribe({
      next: (response: any) => {
        console.log(response);
        let data = response.data
        this.jobtab = this.filteredJobOpening = response.data
        this.jobtab.forEach(
          (element: any) => {
            let id = Object(element)["career-job-category"] as string
            this.getJobCategory(id, element)
          });
        console.log(this.jobtab)

      },
      error: (reason: any) => {
        console.error(reason);
      }
    });
  }

//function for filtering data
  jobFilter(element?: string) {
    if (element) {
      // console.log(element);
      this.filteredJobOpening = this.jobtab.filter((el: { category: string; }) => el.category === element);
    }
    else {
      // console.log("All");
      this.filteredJobOpening = this.jobtab
    }
  }

  
  
 
// static data
  getStaticData(){
    let data:any = JSON.parse(localStorage.getItem("staticcontent") || '[]');
    console.log(data);
    let herodata = data.filter((el: { page: string; sections:string; }) => el.page ==='f05f46bcffb018a0958c0d1efac26d36' && el.sections === '1af9e7b1f68df63d6d09988bd947b2f8');
    this.heroimage=herodata[0]
    let core = data.filter((el: { page: string; sections:string; }) => el.page ==='f05f46bcffb018a0958c0d1efac26d36' && el.sections === 'a5c62e414ff1ef4dd2512dbd80728022');
    this.corevalues=core[0]
    this.sibservice.getReferenceCollections(this.corevalues)
    
    console.log(this.corevalues);
    
    let company = data.filter((el: { page: string; sections:string; }) => el.page ==='f05f46bcffb018a0958c0d1efac26d36' && el.sections === '40b42014e46f83f0f5c51ff157c895f3');
    this.companyperks=company[0]
    this.sibservice.getReferenceCollections(this.companyperks)
    console.log(this.companyperks);
    
    let careergrowth = data.filter((el: { page: string; sections:string; }) => el.page ==='f05f46bcffb018a0958c0d1efac26d36' && el.sections === '8808845a39d7b7b5ca84bdd8458f738a');
    this.growth=careergrowth[0]
    this.sibservice.getReferenceCollections(this.growth)
    console.log(this.growth);
    


    let number = data.filter((el: { page: string; sections:string; }) => el.page ==='f05f46bcffb018a0958c0d1efac26d36' && el.sections === '95ca8e399ad54a5b631713d52406ce19');
    this.one=number[0]
    this.sibservice.getReferenceCollections(this.one)
    console.log(this.one);

    let positions = data.filter((el: { page: string; sections:string; }) => el.page ==='f05f46bcffb018a0958c0d1efac26d36' && el.sections === '3fbc50998d0dc0874279c27d99b393e2');
    this.position=positions[0]
   
    
    
  }
  
  

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }


}





