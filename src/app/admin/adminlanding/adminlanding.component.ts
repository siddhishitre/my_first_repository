import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlanding',
  templateUrl: './adminlanding.component.html',
  styleUrls: ['./adminlanding.component.scss']
})
export class AdminlandingComponent {
constructor(private router : Router){}
landing2(){
  this.router.navigateByUrl('admin/landing2')
}
}
