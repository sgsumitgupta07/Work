import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public Link1:boolean = true; // new user & login
  public Link2:boolean = false; // logout
  public header_cart_count : any;

  constructor( private trans:TransferService , private cookieService : CookieService ) { }

  ngOnInit(): void {

    //subscribe transferred values from transfer service
    this.trans.sub1.subscribe(
      (response:any)=>{
        console.log("In Header Component");
        console.log(response);
        if(response['status']){
          this.Link1=false;
          this.Link2=true;
        }
        else{
          this.Link1=true;
          this.Link2=false;
        }
      }
    )

    // fetch values from localstoage

    var ans = localStorage.getItem("uname");

    if(ans === null){
      this.Link1=true;
      this.Link2=false;
    }
    else{
      this.Link1=false;
      this.Link2=true;
    }



    // Cookie Service Product Header Count

    var ans_cook = this.cookieService.get("cart_product",);
    console.log(ans_cook);

    let arr_cook = ans_cook.split("#");
      console.log(arr_cook)
      this.header_cart_count = arr_cook.length;
      console.log(this.header_cart_count);

      this.trans.instance_for_cart.subscribe(
        (res:any)=>{
          console.log("Header",res);
          this.header_cart_count = res['count'];
        }
      )

  }

}
