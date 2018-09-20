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
  @Output() timeOut: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {
    this.messegeTime = "Se acabó el tiempo";
    this.time = 1000;
    this.gameFinished = false;
  }

  timeOver() {
    this.timeOut.emit("Se termino el tiempo");
  }
  prueba() {
    console.log("ENTRO");
    this.messegeTime = "PRUEBA";
  }

}
