import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { Landing2Component } from './landing2/landing2.component';

const routes: Routes = [
  {path :'adminlanding',component : AdminlandingComponent},
  {path : 'landing2',component : Landing2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
