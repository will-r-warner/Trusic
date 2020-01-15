import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-home-upcoming-show-card",
  templateUrl: "./home-upcoming-show-card.component.html",
  styleUrls: ["./home-upcoming-show-card.component.scss"]
})
export class HomeUpcomingShowCardComponent implements OnInit {
  @Input() band: string;
  @Input() date: string;
  @Input() time: string;
  @Input() location: string;

  constructor() {}

  ngOnInit() {}
}
