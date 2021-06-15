import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { MyService } from '../services/my.service';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  public showProd: any;
  public cartCount = 0;
  constructor( private myser:MyService , private ts:TransferService , private cookieService: CookieService) { }

  ngOnInit(): void {
    this.myser.selectData("products").subscribe(
      (res)=>{
          // console.log(res)
          this.showProd = res;
        }
      )

      //lets subscribe emitted category id
      this.ts.instance_sub_cat.subscribe((response:any)=>{
        console.log("Response In Product");
        console.log(response);

        var catId = response['catId'];
        this.myser.selectData("products?productCatID="+catId).subscribe(
          (filter_response)=>{
            console.log(filter_response);
            this.showProd = filter_response;
          }
        )
      }
    ) 


      //lets subscribe emitted brand id
      this.ts.instance_sub_brand.subscribe((response:any)=>{
        console.log("Response In Product");
        console.log(response);

        var brandId = response['brandId'];
        this.myser.selectData("products?productBrandID="+brandId).subscribe(
          (filter_response)=>{
            console.log(filter_response);
            this.showProd = filter_response;
          }
        )
      }
    )


  }

  add_to_cart(productID:any){
    console.log(productID);
    var ans = this.cookieService.get("cart_product");
    console.log(ans);
    if (ans === undefined){
      //First Product ADD

      this.cookieService.put("cart_product" , productID);
      console.log("Product Added In Cart");
      this.cartCount = 1;
      this.ts.transferForCart({count:this.cartCount})
      console.log("count",this.cartCount);
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

}
