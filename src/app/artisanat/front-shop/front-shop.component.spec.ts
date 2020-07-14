import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontShopComponent } from './front-shop.component';

describe('FrontShopComponent', () => {
  let component: FrontShopComponent;
  let fixture: ComponentFixture<FrontShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
