import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/my.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public userData:any;
  public showProfile : any;
  constructor( private myser : MyService ) { }

  ngOnInit(): void {


    var id = localStorage.getItem("uid");
    console.log(id);

    this.myser.selectData("userDetails/"+id).subscribe(
      (res)=>{
          console.log(res)
          this.showProfile = res;
        }
      )
  }

}
