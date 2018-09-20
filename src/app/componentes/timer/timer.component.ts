import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  @Input() time: number;
  @Input() gameFinished: boolean;

  @Output() timeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  /// @Output() contador:EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    this.runTime(this.time);
  }

  runTime(time: number) {
    this.time = time;
    setInterval(() => {
      if (this.time > 0)
        this.time--;
      else if (this.time == 0) {
        console.log(this.gameFinished);
        this.timeEvent.emit(true);
        this.time--;
      }
    }, 10)
  }
}
