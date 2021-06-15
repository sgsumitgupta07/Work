import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/my.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  public errMsg : string = ""
  constructor( private my:MyService ) { }

  ngOnInit(): void {
  }


  add_brand(obj:any){
    //alert()
    // console.log(obj)
    // console.log(obj.value)
      if (obj.value == ""){
        this.errMsg = "Brand Name Required"
      }
      else{
        var dataObj = {name:obj.value}
        console.log(dataObj);
        this.my.postData("brand" , dataObj).subscribe(
          (res)=>{
            console.log(res);
            this.errMsg = "Brand Added"
          }
        )
      }
  }

}
