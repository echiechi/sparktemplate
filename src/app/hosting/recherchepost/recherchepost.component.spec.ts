import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchepostComponent } from './recherchepost.component';

describe('RecherchepostComponent', () => {
  let component: RecherchepostComponent;
  let fixture: ComponentFixture<RecherchepostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecherchepostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
