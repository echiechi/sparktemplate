import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserDashComponent } from './update-user-dash.component';

describe('UpdateUserDashComponent', () => {
  let component: UpdateUserDashComponent;
  let fixture: ComponentFixture<UpdateUserDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
