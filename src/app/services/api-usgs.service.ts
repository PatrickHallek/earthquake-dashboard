import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface IEarthquakeProperties {
  mag: number;
  place: string;
  time: any;
  alert: string;
  status: string;
  type: string;
  sig: number;
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
  private significantEarthquakeData = new Subject<Array<IEarthquakeProperties>>();

  constructor(private http: HttpClient) { }

  public getEarthquakeDataListener() {
    return this.earthquakeData.asObservable();
  }

  public getSignificantEarthquakeDataListener() {
    return this.significantEarthquakeData.asObservable();
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
            time: new Date(properties.properties.time).toISOString().slice(0, 19).replace('T', ' '),
            alert: properties.properties.alert,
            status: properties.properties.status,
            type: properties.properties.type,
            sig: properties.properties.sig
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

  public getSignificantEarthquakePastDay() {
    const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_day.geojson';
    this.http.get(url).pipe(
      map((result: IEarthquakeData) => {
        return result.features.map((properties: IEarthquakeFeature) => {
          const earthquakeFeatureMap: IEarthquakeProperties = {
            mag: properties.properties.mag,
            place: properties.properties.place,
            time: new Date(properties.properties.time).toISOString().slice(0, 19).replace('T', ' '),
            alert: properties.properties.alert,
            status: properties.properties.status,
            type: properties.properties.type,
            sig: properties.properties.sig
          };
          return earthquakeFeatureMap;
        });
      })
    ).subscribe((result: Array<IEarthquakeProperties>) => {
      this.significantEarthquakeData.next(result);
    },
      err => console.error(err)
    );
  }
}
