import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { TransferService } from './transfer.service';

@Injectable({
  providedIn: 'root'
})
export class ForcookieService {
  public cartCount=0;
  constructor( private cookieService: CookieService , private ts:TransferService) { }

  add(productID:any){
    console.log(productID);
    var ans = this.cookieService.get("cart_product");
    console.log(ans);
    if (ans === undefined){
      //First Product ADD

      this.cookieService.put("cart_product" , productID);
      console.log("Product Added In Cart");
      this.cartCount = 1;
      this.ts.transferForCart({count:this.cartCount})
      console.log ("count",this.cartCount);
    }
    else{
      var arr = ans.split("#");
      console.log(arr);

      var compare_output = arr.indexOf(productID.toString())
      console.log(arr);
      // Second Product Onward Add

          if(compare_output == -1){
            var newProductid = ans+"#"+productID;
            console.log("Product Updated in Cart");
            this.cartCount = arr.length + 1;
          }
          else{
            newProductid = ans;
            console.log("Product Exsit in Cart");
            this.cartCount = arr.length;
          }
          
      console.log(newProductid)
      this.cookieService.put("cart_product" , newProductid);
      console.log(this.cartCount)
      this.ts.transferForCart({count:this.cartCount})
    }
  }
  
  show(){

  }
  delete(){

  }
}
