import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestemunhosComponent } from './testemunhos.component';

describe('TestemunhosComponent', () => {
  let component: TestemunhosComponent;
  let fixture: ComponentFixture<TestemunhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestemunhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestemunhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
