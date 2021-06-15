import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyService } from '../services/my.service';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  public loginForm!: FormGroup;
  public userData:any;
  public errMsg : String = "";

  constructor( private fb: FormBuilder, private myser:MyService , private router:Router , private trans:TransferService ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userEmail:['',[Validators.required,Validators.email]],
      userPassword:['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
    })
  }

  onsubmit(){
    // console.log(this.loginForm.value);
    //http://localhost:3000/userDetails?userEmail=test@test.com&userPassword=1234abc

    var queryStringParams = `?userEmail=${this.loginForm.value.userEmail}&userPassword=${this.loginForm.value.userPassword}`;

    console.log(queryStringParams);
    
    this.myser.selectData("userDetails"+queryStringParams).subscribe((res)=>{
      // console.log(res);
      // console.log(res[0]);
      this.userData = res;
      // console.log(this.userData)
      // console.log(this.userData.minLength)

      if(this.userData.length == 0){
        this.errMsg = "Invalid Crefential";
      }
      else{
        localStorage.setItem("uid",this.userData[0]['id'])
        localStorage.setItem("uname",this.userData[0]['userName'])

        this.trans.transferLoginDetails({status:true});

        this.router.navigate(['/'])
      }
    })
    
  } 

}
