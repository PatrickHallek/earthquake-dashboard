import { Component, OnInit } from '@angular/core';
import { ApiUsgsService, IEarthquakeProperties } from 'src/app/services/api-usgs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-earthquake-table',
  templateUrl: './earthquake-table.component.html',
  styleUrls: ['./earthquake-table.component.scss']
})
export class EarthquakeTableComponent implements OnInit {

  public earthquakeData: Array<IEarthquakeProperties>;
  private earthquakeDataSub: Subscription;

  constructor(private apiUsgsService: ApiUsgsService) { }

  ngOnInit() {
    this.apiUsgsService.getEarthquakeDataByDate('2019-11-18', '2019-11-19');
    this.earthquakeDataSub = this.apiUsgsService
      .getEarthquakeDataListener()
      .subscribe((earthquakeData: Array<IEarthquakeProperties>) => {
        this.earthquakeData = earthquakeData;
      });
  }
}
