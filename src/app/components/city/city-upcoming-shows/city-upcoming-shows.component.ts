import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-city-upcoming-shows",
  templateUrl: "./city-upcoming-shows.component.html",
  styleUrls: ["./city-upcoming-shows.component.scss"]
})
export class CityUpcomingShowsComponent implements OnInit {
  shows = [
    {
      band: "Band Name",
      date: "01/01/20",
      time: "6:30PM",
      location: "Minglewood"
    },
    {
      band: "Band Name",
      date: "01/01/20",
      time: "6:30PM",
      location: "Minglewood"
    },
    {
      band: "Band Name",
      date: "01/01/20",
      time: "6:30PM",
      location: "Minglewood"
    },
    {
      band: "Band Name",
      date: "01/01/20",
      time: "6:30PM",
      location: "Minglewood"
    },
    {
      band: "Band Name",
      date: "01/01/20",
      time: "6:30PM",
      location: "Minglewood"
    },
    {
      band: "Band Name",
      date: "01/01/20",
      time: "6:30PM",
      location: "Minglewood"
    },
    {
      band: "Band Name",
      date: "01/01/20",
      time: "6:30PM",
      location: "Minglewood"
    },
    {
      band: "Band Name",
      date: "01/01/20",
      time: "6:30PM",
      location: "Minglewood"
    },
    {
      band: "Band Name",
      date: "01/01/20",
      time: "6:30PM",
      location: "Minglewood"
    },
    {
      band: "Band Name",
      date: "01/01/20",
      time: "6:30PM",
      location: "Minglewood"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
