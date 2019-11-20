import { Component, OnInit, ngOnDestroy, ViewChild } from '@angular/core';
import { ApiUsgsService, IEarthquakeProperties } from 'src/app/services/api-usgs.service';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { formatDate } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe, 'de');

@Component({
  selector: 'app-earthquake-table',
  templateUrl: './earthquake-table.component.html',
  styleUrls: ['./earthquake-table.component.scss']
})
export class EarthquakeTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['mag', 'place', 'time', 'sig', 'type'];
  public dataSource: MatTableDataSource<IEarthquakeProperties>;
  public earthquakeData: Array<IEarthquakeProperties>;
  private earthquakeDataSub: Subscription;
  public starttime;
  public endtime;

  constructor(private apiUsgsService: ApiUsgsService) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    this.starttime = formatDate(yesterday, 'yyyy-MM-dd', 'de');
    this.endtime = formatDate(new Date(), 'yyyy-MM-dd', 'de');
  }

  ngOnInit() {
    this.apiUsgsService.getEarthquakeDataByDate(this.starttime, this.endtime);
    this.earthquakeDataSub = this.apiUsgsService
      .getEarthquakeDataListener()
      .subscribe((earthquakeData: Array<IEarthquakeProperties>) => {
        this.earthquakeData = earthquakeData;
        this.dataSource = new MatTableDataSource(this.earthquakeData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateEarthquakeData() {
    const starttime = formatDate(this.starttime, 'yyyy-MM-dd', 'de');
    const endtime = formatDate(this.endtime, 'yyyy-MM-dd', 'de');
    this.apiUsgsService.getEarthquakeDataByDate(starttime, endtime);
  }


  OnDestroy() {
    this.earthquakeDataSub.unsubscribe();
  }
}
