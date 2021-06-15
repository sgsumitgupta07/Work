import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { ForcookieService } from '../forcookie.service';
import { MyService } from '../services/my.service';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent implements OnInit {
  public result:any;
  public cartCount = 0;
  
  constructor( private act:ActivatedRoute , private myser:MyService ,private forcookie:ForcookieService ) { }

  ngOnInit(): void {
    console.log(this.act);
    console.log(this.act.snapshot.params);
    var catId = this.act.snapshot.params['categoryID'];
    console.log(catId);
    
    this.myser.selectData("products?productCatID="+catId).subscribe(
      (response:any)=>{
         console.log(response);
         this.result = response;
      }
    )

  }

  add_to_cart(productId:any){
    this.forcookie.add(productId)
  }


  

}
