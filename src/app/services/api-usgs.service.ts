import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface IEarthquakeProperties {
  mag: number;
  place: string;
  time: number;
  alert: string;
  status: string;
  type: string;
  // TODO: Add other api parameter if needed
}

export interface IEarthquakeFeature {
  properties: IEarthquakeProperties;
  // TODO: Add other api parameter if needed
}

export interface IEarthquakeData {
  features: Array<{ properties: IEarthquakeProperties }>;
  // TODO: Add other api parameter if needed
}

@Injectable({
  providedIn: 'root'
})
export class ApiUsgsService {

  private earthquakeData = new Subject<Array<IEarthquakeProperties>>();

  constructor(private http: HttpClient) { }

  public getEarthquakeDataListener() {
    return this.earthquakeData.asObservable();
  }

  public getEarthquakeDataByDate(starttime: string, endtime: string) {
    const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime='
      + starttime + '&endtime=' + endtime + '&limit=1000';
    this.http.get(url).pipe(
      map((result: IEarthquakeData) => {
        return result.features.map((properties: IEarthquakeFeature) => {
          const earthquakeFeatureMap: IEarthquakeProperties = {
            mag: properties.properties.mag,
            place: properties.properties.place,
            time: properties.properties.time,
            alert: properties.properties.alert,
            status: properties.properties.status,
            type: properties.properties.type,
          };
          return earthquakeFeatureMap;
        });
      })
    ).subscribe((result: Array<IEarthquakeProperties>) => {
      this.earthquakeData.next(result);
    },
      err => console.error(err)
    );
  }
}
