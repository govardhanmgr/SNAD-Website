import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicescardsComponent } from './servicescards/servicescards.component';

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
