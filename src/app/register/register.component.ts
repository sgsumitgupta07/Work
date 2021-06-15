import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyService } from '../services/my.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup;

  constructor( private fb: FormBuilder, private myser:MyService , private router:Router ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      userName:['',[Validators.required,Validators.minLength(2)]],
      userAge:['',[Validators.required,Validators.min(18),Validators.max(42)]],
      userMobileNo:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      userEmail:['',[Validators.required,Validators.email]],
      userPassword:['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
    })
  }

  onsubmit(){
    console.log(this.registerForm.value);

    this.myser.postData("userDetails", this.registerForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/loginformpage'])
    }) 
  }

}
