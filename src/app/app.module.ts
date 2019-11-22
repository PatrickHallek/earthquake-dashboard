import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EarthquakeTableComponent } from './components/earthquake-table/earthquake-table.component';
import { HomeComponent } from './screens/home/home.component';
import { EarthquakeNewsComponent } from './components/earthquake-news/earthquake-news.component';
import { EarthquakeMapComponent } from './components/earthquake-map/earthquake-map.component';

import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EarthquakeTableComponent,
    HomeComponent,
    EarthquakeNewsComponent,
    EarthquakeMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.API_KEY
    })
  ],
  entryComponents: [EarthquakeTableComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
