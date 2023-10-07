import { Component } from '@angular/core';//import section
import { Router } from '@angular/router';

@Component({ //componant derective/decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {   //class to write code here
  title = 'My first Application';
   
  //let/var/const city='pune';
   //any data type : city : any
   //property
   city? : string; //declaration of property
   city2: string = 'pune'; //declaration  + defination of property
  city3 = 'mumbai.....';
  name='siddhi';
  no1 = 10;
  no2 = 20;
  cars :string[] = ['swift','jaguar','audi'];
  car = this.cars[1]; //jaguar
  student = {name :'om',age:20}
  
  genderM = "Male";
  genderF = "Female";

  paintinghobby = "Painting";
  swimminghobby = "Swimming";
  readinghobby = "Reading";
  userhobbies :string[]=[];
   favCountry ="india";
   studentName:any = 'siddhi';
   EmpName=""
   num1:any= 10;
   num2 :any=20;
   result? :number;


 constructor(private router:Router){}    // to inject dependancy
  
   //life cycle hooks

   //function
   //Data binding: it is technique to link data between acomponant and the DOM 
   //1.one way data binding: 1.string interpolation 2.property binding 3.event binding
   //2. two way data binding: 
   //string interpolation :  it is one way data binding technique:ts/model to dom/html/template
   
   learningInterpolation(){  //void :  dafault type of function
    //return 'shitre';
    return this.city2;
   }

    gen(data?:any){
      console.log('data',data?.target.value);
      
    }
    hobbies(event:any){
      console.log(event.target.value);
      this.userhobbies.push(event.target.value);
      //this keyword use>>js :this keyword is getting used  inside object o point  objects key
      //ts :this keyword is used to point  global properties.it is  also used in function to fetch value of global property
      console.log(this.userhobbies);
      console.log(this.favCountry );
      
      this.favCountry = 'muletia';
      console.log(this.favCountry );
      this.gen();
    }
    submit(event:any){
      console.log(event);

      

    }
addition(){
 // let number1 = 20;
  //let number2 = 30;
   //var res = number1 + number2;   //addition by variable
   //console.log('Addition Result',res);
   this.result=parseInt(this.num1) + parseInt(this.num2)//addition bynproperties
   console.log('res-->',this.result);
   
}


landing(){
      this.router.navigateByUrl('landing')
}

    }
      
           
    
    
  

  
  

