import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EarthquakeTableComponent } from './components/earthquake-table/earthquake-table.component';
import { HomeComponent } from './screens/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EarthquakeTableComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [EarthquakeTableComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
