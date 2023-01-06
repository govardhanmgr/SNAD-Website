import { FinancearticlesComponent } from './financearticles/financearticles.component';
import { ManagementarticlesComponent } from './managementarticles/managementarticles.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { JobrequirmentComponent } from './jobrequirment/jobrequirment.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component'
import { BlogsectionComponent } from './blogsection/blogsection.component';

import { ReadarticleComponent } from './readarticle/readarticle.component';
import { BusinessarticlesComponent } from './businessarticles/businessarticles.component';
import { AnimationComponent } from './animation/animation.component';
import { PositionsComponent } from './positions/positions.component';
import { ServiceheroimageComponent } from './serviceheroimage/serviceheroimage.component';
import { SubservicesComponent } from './subservices/subservices.component';
import { SubserviceComponent } from './subservice/subservice.component';








const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "blog", component: BlogComponent },
  { path: "contactus", component: ContactusComponent },
  { path: "services", component: ServicesComponent },
  { path: "careers", component: CareersComponent },
  { path: "profile/:itemid", component: ProfileComponent },
  { path: "jobrequirement/:itemid", component: JobrequirmentComponent },
  { path: "blogsection", component: BlogsectionComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'businessarticles', component: BusinessarticlesComponent },
  { path: "managementarticles", component: ManagementarticlesComponent },
  { path: "financearticles", component: FinancearticlesComponent },
  { path: "readarticle/:itemid", component: ReadarticleComponent },
  { path: "positions", component: PositionsComponent },
  {path:"serviceheroimage",component:ServiceheroimageComponent},
  {path:"subservices", component:SubservicesComponent},
  {path:"subservice",component:SubserviceComponent},









  //this path should be in the last line for Error Exceptions
  { path: "**", component: ErrorComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
