import {Component} from '@angular/core';
import {Map} from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ts-ignore
  private map: Map;

  // @ts-ignore
  private zoom: number;

  // tslint:disable-next-line:typedef
  receiveMap(map: Map) {
    this.map = map;
  }

// tslint:disable-next-line:typedef
  receiveZoom(zoom: number) {
    this.zoom = zoom;
  }
}
