import { Component, AfterViewInit } from "@angular/core";
import * as L from "leaflet";

interface Coordinates {
  lat: number;
  lon: number;
}

interface Marker {
  name: string;
  imgSrc: string;
  description: string;
  coordinates: Coordinates;
}

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements AfterViewInit {
  private map;
  private showModal = false;
  private activeMarker: Marker;

  private startCoordinates = { lat: 35.1495, lon: -90.049 };

  private markers: Marker[] = [
    {
      name: "Graceland",
      imgSrc: "assets/img/sights/sight.png",
      description: "The home of Elvis",
      coordinates: { lat: 35.045928, lon: -90.022947 }
    },
    {
      name: "Sun Studio",
      imgSrc: "assets/img/sights/sight.png",
      description: "Elvis recording studio",
      coordinates: { lat: 35.139233, lon: -90.037717 }
    },
    {
      name: "Stax Museum of American Soul Music",
      imgSrc: "assets/img/sights/sight.png",
      description: "Musuem of stuff",
      coordinates: { lat: 35.11577, lon: -90.031248 }
    },
    {
      name: "Rock 'n' Soul Museum",
      imgSrc: "assets/img/sights/sight.png",
      description: "Another museum of stuff",
      coordinates: { lat: 35.138524, lon: -90.052161 }
    },
    {
      name: "Levitt Shell",
      imgSrc: "assets/img/sights/sight.png",
      description: "An outdoor amphitheater in Overton Park",
      coordinates: { lat: 35.145661, lon: -89.994753 }
    }
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
      zoom: 13,
      zoomControl: false
    });

    const tiles = L.tileLayer(
      "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          'Map tiles by <a href="https://carto.com"/>Carto</a>, under <a href="https://carto.com/legal/">Free Basemaps Terms of Service</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
      }
    );

    tiles.addTo(this.map);
  }

  private addMarkersToMap(): void {
    this.markers.forEach((marker, i) => {
      const newMarker = L.marker(marker.coordinates, {
        icon: L.icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: "assets/icons/map-marker-alt-solid.svg"
        })
      });

      newMarker.addTo(this.map);
      newMarker
        .bindTooltip(marker.name, {
          direction: "bottom"
        })
        .openTooltip();
      newMarker.on("click", () => {
        this.showModal = true;
        this.activeMarker = marker;
      });
    });
  }

  private getMarkerBounds(): Coordinates[] {
    const markerCoordinates = this.markers.map(marker => marker.coordinates);
    return L.latLngBounds(markerCoordinates);
  }

  private zoomToMarkers(): void {
    this.map.fitBounds(this.getMarkerBounds());
  }

  public onCloseModal(): void {
    this.showModal = false;
    this.map.eachLayer(layer => {
      layer.openTooltip();
    });
  }
}
