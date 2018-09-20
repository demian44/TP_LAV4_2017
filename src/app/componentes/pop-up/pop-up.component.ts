import { Component, OnInit, Input,OnChanges } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit,OnChanges {

  @Input() showPopUp:boolean = true;
  constructor() { }

  ngOnInit() {
    console.log(this.showPopUp);
  }
  ngOnChanges(){
    console.log(this.showPopUp);
  }

}
