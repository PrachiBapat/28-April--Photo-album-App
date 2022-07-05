import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'printname',
  templateUrl: './printname.component.html',
  styleUrls: ['./printname.component.scss']
})
export class PrintnameComponent implements OnInit {
   @Input() name:string = "Bill Gates"
  //  (default name displayed)
  // color:string = "green";
  @Input()color:string ="green";
  // Inputs are the properties when you call a particular method

  constructor() { }

  ngOnInit(): void {
  }

}
