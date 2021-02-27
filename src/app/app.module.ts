import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { OsmMapComponent } from './osm-map/osm-map.component';

@NgModule({
  declarations: [
    AppComponent,
    OsmMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
