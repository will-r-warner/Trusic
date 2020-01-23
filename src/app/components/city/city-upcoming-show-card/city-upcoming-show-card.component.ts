import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-city-upcoming-show-card",
  templateUrl: "./city-upcoming-show-card.component.html",
  styleUrls: ["./city-upcoming-show-card.component.scss"]
})
export class CityUpcomingShowCardComponent implements OnInit {
  @Input() band: string;
  @Input() date: string;
  @Input() time: string;
  @Input() location: string;

  constructor() {}

  ngOnInit() {}
}
