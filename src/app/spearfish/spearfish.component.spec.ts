import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpearfishComponent } from './spearfish.component';


describe('SpearfishComponent', () => {
  let component: SpearfishComponent;
  let fixture: ComponentFixture<SpearfishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpearfishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpearfishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
