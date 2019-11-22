# EarthquakeDashboard

In this project earthquakes provided by the [earthquakes api](https://earthquake.usgs.gov/fdsnws/event/1/) are listed in a data table and the most significant earthquakes of the last 24 h are shown in a news component. In the data table it is possible to select a certain time period, to sort the entries according to certain attributes and to filter the data by text input.

![Table](https://github.com/PatrickHallek/earthquake-dashboard/blob/master/src/assets/news.PNG?raw=true)
![Table](https://github.com/PatrickHallek/earthquake-dashboard/blob/master/src/assets/map.PNG?raw=true)
![Table](https://github.com/PatrickHallek/earthquake-dashboard/blob/master/src/assets/table.PNG?raw=true)

Attention: The number of Api events has been limited to 1000. This number is already reached after a period of a few days. It is frightening how many earthquakes are recorded within one day (278 in the image). The dashboard is not yet mobile responisve.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
