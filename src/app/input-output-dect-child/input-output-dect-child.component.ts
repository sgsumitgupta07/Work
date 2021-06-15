import { Component, OnInit , Input , Output ,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output-dect-child',
  templateUrl: './input-output-dect-child.component.html',
  styleUrls: ['./input-output-dect-child.component.css']
})
export class InputOutputDectChildComponent implements OnInit {

  @Input() sendCHild : any;
  @Output() sendOutput = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(refValue:any){

    console.log(refValue);
    console.log(refValue.value);
    this.sendOutput.emit(refValue.value);
  }

}
