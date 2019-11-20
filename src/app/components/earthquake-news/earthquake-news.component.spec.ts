import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakeNewsComponent } from './earthquake-news.component';

describe('EarthquakeNewsComponent', () => {
  let component: EarthquakeNewsComponent;
  let fixture: ComponentFixture<EarthquakeNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthquakeNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
