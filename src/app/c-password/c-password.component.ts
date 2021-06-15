import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/my.service';

@Component({
  selector: 'app-c-password',
  templateUrl: './c-password.component.html',
  styleUrls: ['./c-password.component.css']
})
export class CPasswordComponent implements OnInit {
  public mess : any;
  constructor( private myser : MyService ) { }

  ngOnInit(): void {
  }

  changePassword(obj1:any,obj2:any,obj3:any){

    console.log(obj1);
    console.log(obj1.value);

    console.log(obj2);
    console.log(obj2.value);

    console.log(obj3);
    console.log(obj3.value);

    var id = localStorage.getItem("uid");
    console.log(id);

    this.myser.selectData("userDetails/"+id).subscribe(
      (res:any)=>{
        console.log(res);

        if(res['userPassword']!=obj1.value){
          this.mess = "Invalid Current Password"
        }
        else if(obj2.value != obj3.value){
          this.mess = "New password & confirm password does not match";
        }
        else{
          var obj = {
            userAge: res["userAge"],
            userEmail: res["userEmail"],
            userMobileNo: res["userMobileNo"],
            userName: res["userName"],
            userPassword: obj2.value,
          }

          console.log(obj)
          
          this.myser.updateData("userDetails/"+id,obj).subscribe(
            (response)=>{
              console.log(response);
              this.mess = "New password Updated";
            }
          )
        }

    })

  }

}
