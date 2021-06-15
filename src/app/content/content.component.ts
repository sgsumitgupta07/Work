import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  username ="Sumit";
  age = 22;
  parastatus : boolean = true;
  parastatus1 : boolean = false;
  users : any = ['First','Second','Third'];
  products : any = [
    { name:"ABC" , path:"Prod1.jpg" , price:1000 },
    { name:"PQR" , path:"Prod2.jpg" , price:2000 },
    { name:"XYZ" , path:"Prod3.jpg" , price:3000 },
  ]
  colspan1 = 2;
  applyClass : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  myfunction(){
    return "Hello Function"
  }

  myfunction2(){
    console.log(this)
    this.username = "Gupta";
  }

  myfunction3(){
    // alert(HELLO);
    this.parastatus=false;
    this.parastatus1=true;
  }

  newfun(x1:any,x2:any){
    console.log(x1.value,x2.value);
    this.applyClass=true;
  }

}
