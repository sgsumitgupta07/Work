import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-dect',
  templateUrl: './input-output-dect.component.html',
  styleUrls: ['./input-output-dect.component.css']
})
export class InputOutputDectComponent implements OnInit {
  public sendDataChild : any = "Any"
  public mydata :any;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(refValue:any){

    console.log(refValue);
    console.log(refValue.value);
    this.sendDataChild=refValue.value;
  }

}
