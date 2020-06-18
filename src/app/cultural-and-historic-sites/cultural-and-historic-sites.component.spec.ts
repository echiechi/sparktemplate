import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalAndHistoricSitesComponent } from './cultural-and-historic-sites.component';

describe('CulturalAndHistoricSitesComponent', () => {
  let component: CulturalAndHistoricSitesComponent;
  let fixture: ComponentFixture<CulturalAndHistoricSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturalAndHistoricSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturalAndHistoricSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
