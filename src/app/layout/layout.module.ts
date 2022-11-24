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
import { BusinessApplicationComponent } from './business-application/business-application.component';
import { ManagedInfrastructureComponent } from './managed-infrastructure/managed-infrastructure.component';
import { DatabaseManagementComponent } from './database-management/database-management.component';
import { CloudTransformationComponent } from './cloud-transformation/cloud-transformation.component';
import { ManagedItServicesComponent } from './managed-it-services/managed-it-services.component';
import { MigrationStabilizationComponent } from './migration-stabilization/migration-stabilization.component';
import { DigitalTransformationComponent } from './digital-transformation/digital-transformation.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    CareersComponent,
    BlogComponent,
    ContactusComponent,
    ErrorComponent,
    BusinessApplicationComponent,
    ManagedInfrastructureComponent,
    DatabaseManagementComponent,
    CloudTransformationComponent,
    ManagedItServicesComponent,
    MigrationStabilizationComponent,
    DigitalTransformationComponent

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
