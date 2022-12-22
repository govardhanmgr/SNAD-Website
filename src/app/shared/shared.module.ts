import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GetintouchComponent } from './getintouch/getintouch.component';
import { ServicescardsComponent } from './servicescards/servicescards.component';
import { ImpactfullnumbersComponent } from './impactfullnumbers/impactfullnumbers.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GetintouchComponent,
    ServicescardsComponent,
    ImpactfullnumbersComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    GetintouchComponent,
    ServicescardsComponent,
    ImpactfullnumbersComponent
  ]
})
export class SharedModule { }
