import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { MyService } from '../services/my.service';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  public result : any;
  public msg : string = ""
  constructor( private myser : MyService , private cookieService: CookieService , private trans : TransferService ) { }

  ngOnInit(): void {

    var ans = this.cookieService.get("cart_product",);
    console.log(ans);

    if(ans === undefined){
      this.msg= "First Add some Product Into a Cart"
    }
    else{
      let arr = ans.split("#");
      console.log(arr)
      
      var str = ``
      for(let values of arr){
        str = str + `id=`+values+"&"    //id=1&  //id=1&id=2&
      }
      console.log(str)
      str = str.substr(0,str.length-1)     //id=1&id=2  ( - & )
      console.log(str)                       //id=1&id=2

      this.myser.selectData("products?"+str).subscribe(        ///product?id=1&id=2
        (res)=>{
          console.log(res)

          this.result = res;
        }
      )
    }

  }
  
  onClick(productID:any,ev:any){
    console.log(productID);
    console.log(ev);

    var ans = this.cookieService.get("cart_product",);
    console.log(ans);
    let arr = ans.split("#");  //split # to the ans
    console.log(arr);

    if(arr.length == 1){
      this.cookieService.remove("cart_product")   // count =1 then remove hole cookie in the browser
      this.trans.transferForCart({count:0})
    }
    else{

      let position = arr.indexOf(productID.toString()); //compare in array with position also convert to string 
      console.log(position);

      arr.splice(position,1)  ///delete one compare record in to a array
      console.log(arr);

      let finalID = arr.join("#");   /// again join to the array
      console.log(finalID);

      this.cookieService.put("cart_product" , finalID);   //again store the data in the cookie
      this.trans.transferForCart({count:arr.length})
    }

    ev.target.parentNode.remove();   // remove parent node in the HTML


  }

}
