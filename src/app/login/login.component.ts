import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from '../services/my.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private arg1:MyService, private re:Router)  {
    
  } 

  ngOnInit(): void {
    this.arg1.showFunction()
  }

  submitData(username:any,age:any)
  {
    console.log(username.value,age.value)
    this.arg1.postData("users",{name:username.value,age:age.value}).subscribe(
      (response)=>{
        console.log(response)
        this.re.navigate(["/contactpage"])
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
