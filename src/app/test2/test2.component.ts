import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component {
  constructor(private router : Router){}
  back(){
    this.router.navigateByUrl('landing')
  }

}

