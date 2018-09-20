import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedraTijeraComponent } from './piedra-tijera.component';

describe('PiedraTijeraComponent', () => {
  let component: PiedraTijeraComponent;
  let fixture: ComponentFixture<PiedraTijeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiedraTijeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedraTijeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
