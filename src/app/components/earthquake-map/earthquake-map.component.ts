import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiUsgsService, IEarthquakeFeature } from 'src/app/services/api-usgs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-earthquake-map',
  templateUrl: './earthquake-map.component.html',
  styleUrls: ['./earthquake-map.component.scss']
})
export class EarthquakeMapComponent implements OnInit, OnDestroy {
  lat = 51.678418;
  lng = 7.809007;
  public earthquakeData: Array<IEarthquakeFeature>;
  private earthquakeDataSub: Subscription;
  constructor(private apiUsgsService: ApiUsgsService) { }

  ngOnInit() {
    this.earthquakeDataSub = this.apiUsgsService
      .getEarthquakeDataListener()
      .subscribe((earthquakeData: Array<IEarthquakeFeature>) => {
        this.earthquakeData = earthquakeData;
      });
  }

  ngOnDestroy() {
    this.earthquakeDataSub.unsubscribe();
  }
}
