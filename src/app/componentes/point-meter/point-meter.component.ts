import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../clases/user';

@Component({
  selector: 'app-point-meter',
  templateUrl: './point-meter.component.html',
  styleUrls: ['./point-meter.component.css']
})
export class PointMeterComponent implements OnInit {

  constructor(private user: User) { }

  ngOnInit() {
    this.user.pointsActualGame;
  }

}
