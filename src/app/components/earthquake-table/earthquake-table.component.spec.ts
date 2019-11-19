import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakeTableComponent } from './earthquake-table.component';

describe('EarthquakeTableComponent', () => {
  let component: EarthquakeTableComponent;
  let fixture: ComponentFixture<EarthquakeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthquakeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
