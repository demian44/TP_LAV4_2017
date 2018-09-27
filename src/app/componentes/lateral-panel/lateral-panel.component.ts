import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-lateral-panel',
  templateUrl: './lateral-panel.component.html',
  styleUrls: ['./lateral-panel.component.css']
})
export class LateralPanelComponent implements OnInit {
  @Input() time: number;
  @Input() title: string = "Tu juego";
  gameFinished: boolean;
  messegeTime: string;
  constructor() { }
  @Output() timeOut: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() pointCalculed: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit() {
    this.messegeTime = "Se acabó el tiempo";
    this.time = this.time * 100; //Multiplico por milisegundos.
    this.gameFinished = false;
  }

  timeOver(timeOver) {
    this.timeOut.emit(timeOver);
  }
  prueba() {
    console.log("ENTRO");
    this.messegeTime = "PRUEBA";
  }

  timePointCalculed() {
    this.pointCalculed.emit();
  }

}
