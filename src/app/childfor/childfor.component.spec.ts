import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildforComponent } from './childfor.component';

describe('ChildforComponent', () => {
  let component: ChildforComponent;
  let fixture: ComponentFixture<ChildforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
