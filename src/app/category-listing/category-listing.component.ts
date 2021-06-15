import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/my.service';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent implements OnInit {
  public showCat :any;
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
