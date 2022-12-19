import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CareersComponent } from './careers/careers.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { BlogsectionComponent } from './blogsection/blogsection.component';
import { AnimationComponent } from './animation/animation.component';

import { FinancearticlesComponent } from './financearticles/financearticles.component';
import { ManagementarticlesComponent } from './managementarticles/managementarticles.component';
import { ReadarticleComponent } from './readarticle/readarticle.component';
import { BusinessarticlesComponent } from './businessarticles/businessarticles.component';
import { PositionsComponent } from './positions/positions.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    CareersComponent,
    BlogComponent,
    ContactusComponent,
    ErrorComponent,
    ProfileComponent,
    BlogsectionComponent,  
    AnimationComponent, 
   
    FinancearticlesComponent,
    ManagementarticlesComponent,
    ReadarticleComponent, 
    BusinessarticlesComponent, PositionsComponent

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
})
export class LayoutModule {}
