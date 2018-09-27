import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../clases/user';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  counterFlag: boolean = true;
  pointFlag: boolean = true;
  constructor(private user: User) { }

  @Input() time: number;
  @Input() gameFinished: boolean;


  @Output() timeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() pointCalculed: EventEmitter<boolean> = new EventEmitter<boolean>();
  /// @Output() contador:EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    this.runTime(this.time);
  }

  runTime(time: number) {
    this.time = time;
    setInterval(() => {
      if (!this.user.won && !this.user.lose) {
        if (this.time > 0)
          this.time--;
        else if (this.counterFlag && this.time == 0) {
          console.log(this.gameFinished);
          this.timeEvent.emit(true);
          this.counterFlag = false;
          this.user.lose = true;
        }
      }
      else if (this.pointFlag) {  
        this.pointFlag = false;
        this.user.pointsActualGame += this.user.won ? (this.time / 50) : (this.time / (-50));
        this.time = 0;
        this.pointCalculed.emit();
      }
    }, 10);
  }
}
