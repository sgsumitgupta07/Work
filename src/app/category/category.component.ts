import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/my.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public errMsg : string = ""
  public showCat:any;
  constructor( private my:MyService ) { }

  ngOnInit(): void {
    this.show_category()
  }

  show_category(){
    this.my.selectData("category").subscribe(
      (res)=>{
          // console.log(res)
          this.showCat = res;
        }
      )
    }
  
  

  add_category(obj:any){
    //alert()
    // console.log(obj)
    // console.log(obj.value)
      if (obj.value == ""){
        this.errMsg = "Category Name Required"
      }
      else{
        var dataObj = {name:obj.value}
        console.log(dataObj);
        this.my.postData("category" , dataObj).subscribe(
          (res)=>{
            console.log(res);
            this.errMsg = "Category Added"
            this.show_category()
          }
        )
      }
  }
}
