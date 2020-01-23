import { Component, OnInit } from "@angular/core";

interface Album {
  src: string;
  alt: string;
}

@Component({
  selector: "app-home-artists",
  templateUrl: "./home-artists.component.html",
  styleUrls: ["./home-artists.component.scss"]
})
export class HomeArtistsComponent implements OnInit {
  public albums: Album[] = [];

  constructor() {}

  ngOnInit() {
    this.createAlbums();
  }

  private createAlbums(): void {
    for (let i = 1; i < 7; i++) {
      this.albums.push({
        src: `assets/img/albums/album-${i}.jpg`,
        alt: `Album ${i}`
      });
    }
  }
}
