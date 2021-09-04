import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedevComponent } from './timedev.component';

describe('TimedevComponent', () => {
  let component: TimedevComponent;
  let fixture: ComponentFixture<TimedevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimedevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimedevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
