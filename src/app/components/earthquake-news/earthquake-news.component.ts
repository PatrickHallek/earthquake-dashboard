import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEarthquakeProperties, ApiUsgsService } from 'src/app/services/api-usgs.service';

@Component({
  selector: 'app-earthquake-news',
  templateUrl: './earthquake-news.component.html',
  styleUrls: ['./earthquake-news.component.scss']
})
export class EarthquakeNewsComponent implements OnInit, OnDestroy {
  public significantEarthquakeData: Array<IEarthquakeProperties>;
  private significantEarthquakeDataSub: Subscription;
  constructor(private apiUsgsService: ApiUsgsService) { }

  ngOnInit() {
    this.apiUsgsService.getSignificantEarthquakePastDay()
    this.significantEarthquakeDataSub = this.apiUsgsService
      .getSignificantEarthquakeDataListener()
      .subscribe((significantEarthquakeData: Array<IEarthquakeProperties>) => {
        this.significantEarthquakeData = significantEarthquakeData;
        console.log(significantEarthquakeData);
      });
  }

  ngOnDestroy() {
    this.significantEarthquakeDataSub.unsubscribe();
  }
}
