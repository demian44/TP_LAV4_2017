import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointMeterComponent } from './point-meter.component';

describe('PointMeterComponent', () => {
  let component: PointMeterComponent;
  let fixture: ComponentFixture<PointMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
