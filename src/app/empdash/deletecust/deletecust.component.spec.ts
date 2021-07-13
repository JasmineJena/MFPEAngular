import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecustComponent } from './deletecust.component';

describe('DeletecustComponent', () => {
  let component: DeletecustComponent;
  let fixture: ComponentFixture<DeletecustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletecustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
