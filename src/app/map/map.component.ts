import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {latLng, LeafletEvent, Map, MapOptions, tileLayer, ZoomAnimEvent} from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})


export class MapComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line:new-parens
  @Output() map$: EventEmitter<Map> = new EventEmitter;
  // tslint:disable-next-line:new-parens
  @Output() zoom$: EventEmitter<number> = new EventEmitter;
  @Input() options: MapOptions = {
    layers: [tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      opacity: 0.7,
      maxZoom: 19,
      detectRetina: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })],
    zoom: 1,
    center: latLng(0, 0)
  };
  // @ts-ignore
  public map: Map;
  // @ts-ignore
  public zoom: number;

  constructor() {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    // tslint:disable-next-line:no-unused-expression
    this.map.clearAllEventListeners;
    this.map.remove();
  }

  // tslint:disable-next-line:typedef
  onMapReady(map: Map) {
    this.map = map;
    this.map$.emit(map);
    this.zoom = map.getZoom();
    this.zoom$.emit(this.zoom);
  }

  // tslint:disable-next-line:typedef
  onMapZoomEnd(e: LeafletEvent) {
    this.zoom = e.target.getZoom();
    this.zoom$.emit(this.zoom);
  }
}
