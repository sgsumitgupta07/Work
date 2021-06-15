import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/my.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public var1:String=""
  apidata:any=[]
  userData:any=[]
  constructor( private arg1:MyService) {
    console.log(this.arg1)
    // alert(1)
   }

  ngOnInit(): void {
    // alert(2)
    // this.var1=this.arg1.showFunction()
    this.arg1.showFunction().subscribe((response)=>{
      console.log(response);
      this.apidata=response;
    },
      
      (error)=>{
        console.log(error)
      }
    )

    /////////////////////////////////////////////
      this.arg1.selectData("users").subscribe(
        (response)=>{
          console.log(response)
          this.userData=response
        },
        (error)=>{
          console.log(error)
        }
      )
  
  }

}
