import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/my.service';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-show-brand',
  templateUrl: './show-brand.component.html',
  styleUrls: ['./show-brand.component.css']
})
export class ShowBrandComponent implements OnInit {
  public showBrand :any;
  constructor( private myser:MyService , private ts:TransferService ) { }

  ngOnInit(): void {
    this.myser.selectData("brand").subscribe(
      (res)=>{
          // console.log(res)
          this.showBrand = res;
        }
      )
    }

      sendBrandData(id:any , ev:any){
        ev.preventDefault(); //For page  not loading
        console.log(id);
        this.ts.transferBrandId({brandId:id});
      }


}
