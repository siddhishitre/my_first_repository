import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { AddcircleComponent } from './addcircle/addcircle.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { StudentComponent } from './student/student.component';
import { Landing2Component } from './admin/landing2/landing2.component';

const routes: Routes = [
  {path :'', component : LandingComponent},
  {path :'home',component : HomeComponent},
  {path :'addcircle',component :AddcircleComponent},
  {path : 'landing',component : LandingComponent},
  {path :'test',component:TestComponent},
  {path : 'test2', component :Test2Component},
  {path : 'student',component: StudentComponent},
  {path : 'landing2',component : Landing2Component},
  
{path  : 'admin',loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
