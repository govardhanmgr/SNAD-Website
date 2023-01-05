import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicescardsComponent } from './shared/servicescards/servicescards.component';

const routes: Routes = [
  {path:"", loadChildren:()=> import("./layout/layout.module").then(x=>x.LayoutModule)},
  {
    path: 'servicescards',
    component: ServicescardsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
