import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-upcoming-shows",
  templateUrl: "./home-upcoming-shows.component.html",
  styleUrls: ["./home-upcoming-shows.component.scss"]
})
export class HomeUpcomingShowsComponent implements OnInit {
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
