import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckFormsComponent } from './check-forms.component';

describe('CheckFormsComponent', () => {
  let component: CheckFormsComponent;
  let fixture: ComponentFixture<CheckFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
