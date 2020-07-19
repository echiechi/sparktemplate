import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpadminComponent } from './spadmin.component';

describe('SpadminComponent', () => {
  let component: SpadminComponent;
  let fixture: ComponentFixture<SpadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
