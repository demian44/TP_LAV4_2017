import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lateral-panel',
  templateUrl: './lateral-panel.component.html',
  styleUrls: ['./lateral-panel.component.css']
})
export class LateralPanelComponent implements OnInit {
  time: number;
  gameFinished: boolean;
  messegeTime: string;
  constructor() { }
  @Output() timeOut: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit() {
    this.messegeTime = "Se acabó el tiempo";
    this.time = 200;
    this.gameFinished = false;
  }

  timeOver(timeOver) {
    this.timeOut.emit(timeOver);
  }
  prueba() {
    console.log("ENTRO");
    this.messegeTime = "PRUEBA";
  }

}
