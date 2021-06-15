import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }

  public sub1 = new Subject();
  public instance_sub_cat = new Subject();
  public instance_sub_brand = new Subject();
  public instance_for_cart = new Subject();

  transferLoginDetails(obj:any){
    console.log(obj);
    console.log(this.sub1);
    //lets emit data from transfer service
    this.sub1.next(obj); //{Status:true} , {status:false}
  }

  transferCatId(obj:any){
    console.log("Function Called Cat");
    console.log(obj);
    this.instance_sub_cat.next(obj);
  }

  transferBrandId(obj:any){
    console.log("Function Called Brand");
    console.log(obj);
    this.instance_sub_brand.next(obj);
  }

  transferForCart(obj:any){
    console.log("Function Called Cart");
    console.log(obj);
    this.instance_for_cart.next(obj);
  }
  
}
