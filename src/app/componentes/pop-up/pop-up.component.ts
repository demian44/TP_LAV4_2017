import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit, OnChanges {
  stilePopUp: string;
  messegeHeader: string;
  @Input() showPopUp: boolean = true;
  @Input() success: boolean;
  @Input() messege: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.showPopUp);
    this.stilePopUp = "modal fade";
  }
  ngOnChanges() {
    console.log(this.showPopUp);
    if (this.showPopUp) {
      this.stilePopUp = "modal fade show block";
    }
    if (!this.success)
      this.messegeHeader = "Jodete hermano";
  }
  reload() {
    this.stilePopUp = "modal fade";
    window.location.reload();
  }
  closeGoMenu() {
    this.stilePopUp = "modal fade";
    this.router.navigate(["/Principal"]);
  }

}
