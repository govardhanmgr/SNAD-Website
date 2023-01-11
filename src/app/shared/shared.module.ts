import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GetintouchComponent } from './getintouch/getintouch.component';
import { ServicescardsComponent } from './servicescards/servicescards.component';
import { ImpactfullnumbersComponent } from './impactfullnumbers/impactfullnumbers.component';
import { HeroimgComponent } from './heroimg/heroimg.component';
import { CASESTUDIESComponent } from './casestudies/casestudies.component';
import { TESTIMONIALSComponent } from './testimonials/testimonials.component';
import { LatestarticlesComponent } from './latestarticles/latestarticles.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Header1Component } from './header1/header1.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GetintouchComponent,
    ServicescardsComponent,
    ImpactfullnumbersComponent,
    HeroimgComponent,
    CASESTUDIESComponent,
    TESTIMONIALSComponent,
    LatestarticlesComponent,
    Header1Component,
  ],
  imports: [CommonModule, SharedRoutingModule, CarouselModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    GetintouchComponent,
    ServicescardsComponent,
    ImpactfullnumbersComponent,
    HeroimgComponent,
    CASESTUDIESComponent,
    LatestarticlesComponent,
    TESTIMONIALSComponent,
    Header1Component,
  ],
})
export class SharedModule {}
