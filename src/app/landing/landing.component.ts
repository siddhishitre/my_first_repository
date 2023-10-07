import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(private router:Router){

  }
  home(){
    this.router.navigateByUrl('home');
  }
  addcircle(){
    this.router.navigateByUrl('addcircle');

  }
  test(){
    this.router.navigateByUrl('test');
    
  }
   test2(){
    this.router.navigateByUrl('test2');
   }
   student(){
    this.router.navigateByUrl('student')
   }
   studentmodule(){
    this.router.navigateByUrl('studentModule')
   }
   admin(){
    this.router.navigateByUrl('admin/adminlanding')
   }
   landing2(){
    this.router.navigateByUrl('landing2')
   }
}
