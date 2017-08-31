import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRoutingComponent } from './check-routing.component';

describe('CheckRoutingComponent', () => {
  let component: CheckRoutingComponent;
  let fixture: ComponentFixture<CheckRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
