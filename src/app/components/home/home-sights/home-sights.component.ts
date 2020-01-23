import { Component, OnInit } from "@angular/core";

interface Sight {
  src: string;
  alt: string;
}

@Component({
  selector: "app-home-sights",
  templateUrl: "./home-sights.component.html",
  styleUrls: ["./home-sights.component.scss"]
})
export class HomeSightsComponent implements OnInit {
  public sights: Sight[] = [];

  constructor() {}

  ngOnInit() {
    this.createSights();
  }

  private createSights(): void {
    for (let i = 1; i < 7; i++) {
      this.sights.push({
        src: `assets/img/sights/sight.png`,
        alt: `Sight ${i}`
      });
    }
  }
}
