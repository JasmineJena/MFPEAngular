import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustdashComponent } from './custdash.component';

describe('CustdashComponent', () => {
  let component: CustdashComponent;
  let fixture: ComponentFixture<CustdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
