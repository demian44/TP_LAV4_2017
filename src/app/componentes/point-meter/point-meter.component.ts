import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-point-meter',
  templateUrl: './point-meter.component.html',
  styleUrls: ['./point-meter.component.css']
})
export class PointMeterComponent implements OnInit {
  points: number;
  constructor() { }

  ngOnInit() {
    this.points = 0;
  }

}
