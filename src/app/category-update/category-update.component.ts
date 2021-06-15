import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyService } from '../services/my.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  public showCatData : any;

  constructor( private myser : MyService , private act : ActivatedRoute , private router : Router ) { }

  ngOnInit(): void {
    var id = this.act.snapshot.params['categoryID'];
    console.log(id);

    this.myser.selectData('category/'+id).subscribe(
      (res:any)=>{
        console.log(res);
        this.showCatData = res['name'];
      }
    )
  }

  onCLick(obj:any){
    var id = this.act.snapshot.params['categoryID'];
    console.log(id);

    console.log(obj.value);
    this.myser.updateData('category/'+id,{name:obj.value}).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigate(['showdata'])
      }
    )
  }

}
