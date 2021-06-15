import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MyService } from '../services/my.service';
@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  constructor( private my : MyService ) { }
  public showCatJSON : any;
  public showBrandJSON : any;
  public showUsersJSON : any;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } 
    else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  ngOnInit(): void {

    this.my.selectData("category").subscribe(
      (res)=>{
          console.log(res)
          this.showCatJSON = res;
        })

     this.my.selectData("brand").subscribe(
        (res)=>{
            console.log(res)
            this.showBrandJSON = res;
          })

    this.my.selectData("users").subscribe(
      (res)=>{
          console.log(res)
          this.showUsersJSON = res;
        })
  }

}
