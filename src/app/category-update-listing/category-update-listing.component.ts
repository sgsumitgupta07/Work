import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/my.service';

@Component({
  selector: 'app-category-update-listing',
  templateUrl: './category-update-listing.component.html',
  styleUrls: ['./category-update-listing.component.css']
})
export class CategoryUpdateListingComponent implements OnInit {
 public showCat : any;
  constructor( private myser : MyService ) { }

  ngOnInit(): void {
    this.myser.selectData("category").subscribe(
      (res)=>{
          // console.log(res)
          this.showCat = res;
        }
      )
    }

}
