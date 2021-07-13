import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustComponent } from './viewcust.component';

describe('ViewcustComponent', () => {
  let component: ViewcustComponent;
  let fixture: ComponentFixture<ViewcustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
