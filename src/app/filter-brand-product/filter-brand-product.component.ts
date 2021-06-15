import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForcookieService } from '../forcookie.service';
import { MyService } from '../services/my.service';

@Component({
  selector: 'app-filter-brand-product',
  templateUrl: './filter-brand-product.component.html',
  styleUrls: ['./filter-brand-product.component.css']
})
export class FilterBrandProductComponent implements OnInit {
  public result:any;
  public cardCount = 0;
  constructor( private act:ActivatedRoute , private myser:MyService , private forcookie:ForcookieService) { }

  ngOnInit(): void {
    console.log(this.act);
    console.log(this.act.snapshot.params);
    var brandId = this.act.snapshot.params['brandID'];
    console.log(brandId);
    this.myser.selectData("products?productBrandID="+brandId).subscribe(
      (response:any)=>{
         console.log(response);
         this.result = response;
      }
    )
  }

  add_to_cart(productId:any){
    this.forcookie.add(productId)
  }

  // add_to_cart(productID:any){
  //   console.log(productID);

  //   var ans = this.cookieService.get("brand_card_product");
  //   console.log(ans);

  //   if(ans === undefined){
  //     this.cookieService.put("brand_card_product",productID);
  //     console.log("First Product Added In The Cart");
  //     this.cardCount = 1;
  //     console.log(this.cardCount);
  //   }
  //   else{
  //     var arr = ans.split("#");
  //     console.log(arr);

  //     var compare_output = arr.indexOf(productID.toString());
  //     console.log(arr);

  //         // Second Product Onward Add

  //         if(compare_output = -1){
  //           var newproductID = ans+"#"+productID;
  //           console.log("Product Updated In The Cart");
  //           this.cardCount = this.cardCount + 1;
  //         }
  //         else{
  //           newproductID = ans;
  //           console.log("Product Exsit In The Cart");
  //           this.cardCount = arr.length;
  //         }

  //     console.log(newproductID);
  //     this.cookieService.put("brand_card_product",newproductID);
  //     console.log(this.cardCount)

  //   }
  // }


}
