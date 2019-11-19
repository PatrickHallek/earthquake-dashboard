import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiUsgsService, IEarthquakeProperties } from 'src/app/services/api-usgs.service';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-earthquake-table',
  templateUrl: './earthquake-table.component.html',
  styleUrls: ['./earthquake-table.component.scss']
})
export class EarthquakeTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['mag', 'place', 'time', 'status', 'type'];
  public dataSource: MatTableDataSource<IEarthquakeProperties>;
  public earthquakeData: Array<IEarthquakeProperties>;
  private earthquakeDataSub: Subscription;

  constructor(private apiUsgsService: ApiUsgsService) {
  }

  ngOnInit() {
    this.apiUsgsService.getEarthquakeDataByDate('2019-11-18', '2019-11-19');
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


  ngOndelete() { }
}
