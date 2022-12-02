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
import { ServicesComponent } from './services/services.component';
import { BusinessApplicationComponent } from './business-application/business-application.component';
import { CloudTransformationComponent} from './cloud-transformation/cloud-transformation.component';
import { DatabaseManagementComponent} from './database-management/database-management.component';
import { DigitalTransformationComponent } from './digital-transformation/digital-transformation.component';
import { ManagedInfrastructureComponent } from './managed-infrastructure/managed-infrastructure.component';
import { ManagedItServicesComponent } from './managed-it-services/managed-it-services.component';
import { MigrationStabilizationComponent } from './migration-stabilization/migration-stabilization.component';







const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "blog", component: BlogComponent },
  { path: "contactus", component: ContactusComponent },
  { path: "services", component: ServicesComponent },
  { path: "careers", component: CareersComponent },
  { path: "businessapplication", component: BusinessApplicationComponent },
  { path: "cloudtransformation", component: CloudTransformationComponent },
  { path: "databasemanagement", component: DatabaseManagementComponent },
  { path: "digitaltransformation", component: DigitalTransformationComponent },
  { path: "managedinfrastructure", component: ManagedInfrastructureComponent },
  { path: "manageditservices", component:ManagedItServicesComponent},
  { path: "migrationstabilization", component:MigrationStabilizationComponent},
  { path: "profile",component:ProfileComponent},
  {path:"jobrequirement",component:JobrequirmentComponent},




  //this path should be in the last line for Error Exceptions
  { path: "**", component: ErrorComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
