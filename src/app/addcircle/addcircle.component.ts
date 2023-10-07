import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcircle',
  templateUrl: './addcircle.component.html',
  styleUrls: ['./addcircle.component.scss']
})
export class AddcircleComponent {

  constructor(private router : Router){}
  back(){
    this.router.navigateByUrl('landing')

  }
}

  


