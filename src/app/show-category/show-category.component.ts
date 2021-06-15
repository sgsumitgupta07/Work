import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/my.service';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {
  public showCat :any;
  constructor( private myser:MyService , private ts:TransferService) { }

  ngOnInit(): void {
    this.myser.selectData("category").subscribe(
      (res)=>{
          // console.log(res)
          this.showCat = res;
        }
      )
  }

  sendCatData(id:any , ev:any){
    ev.preventDefault(); //For page not loading
    console.log(id);
    this.ts.transferCatId({catId:id});
  }

}
