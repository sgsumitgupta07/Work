import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyService } from '../services/my.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  constructor( private act : ActivatedRoute , private myser : MyService , private router : Router) { }

  ngOnInit(): void {
    var id = this.act.snapshot.params['categoryID'];
    console.log(id);
    //delte( localhost:3000/category/4)
    this.myser.deleteData('category/'+id).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigate(['showdata'])
      }
    )

  }

}
