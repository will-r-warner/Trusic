import { Component, AfterViewInit } from "@angular/core";
import * as L from "leaflet";

interface Coordinates {
  lat: number;
  lon: number;
}

interface marker {
  name: string;
  coordinates: Coordinates;
}

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements AfterViewInit {
  private map;

  private startCoordinates = { lat: 35.1495, lon: -90.049 };

  private markers = [
    { name: "Graceland", coordinates: { lat: 35.045928, lon: -90.022947 } },
    { name: "Sun Studio", coordinates: { lat: 35.139233, lon: -90.037717 } },
    {
      name: "Stax Museum of American Soul Music",
      coordinates: { lat: 35.11577, lon: -90.031248 }
    },
    {
      name: "Rock 'n' Soul Museum",
      coordinates: { lat: 35.138524, lon: -90.052161 }
    },
    { name: "Levitt Shell", coordinates: { lat: 35.145661, lon: -89.994753 } }
  ];

  constructor() {}

  ngAfterViewInit() {
    this.initMap();
    this.addMarkersToMap();
    this.zoomToMarkers();
  }

  private initMap(): void {
    this.map = L.map("map", {
      center: [this.startCoordinates.lat, this.startCoordinates.lon],
      zoom: 13
    });

    const tiles = L.tileLayer("http://tile.stamen.com/toner/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    });

    tiles.addTo(this.map);
  }

  private addMarkersToMap(): void {
    this.markers.forEach(marker => {
      L.marker(marker.coordinates, marker.name).addTo(this.map);
    });
  }

  private getMarkerBounds(): Coordinates[] {
    const markerCoordinates = this.markers.map(marker => marker.coordinates);
    return L.latLngBounds(markerCoordinates);
  }

  private zoomToMarkers(): void {
    this.map.fitBounds(this.getMarkerBounds());
  }
}
