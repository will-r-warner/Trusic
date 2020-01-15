import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  icons = [
    { src: "assets/icons/home-solid.svg", alt: "Home icon" },
    { src: "assets/icons/star-regular.svg", alt: "Star icon" },
    { src: "assets/icons/trusic-logo.png", alt: "Trusic logo" },
    { src: "assets/icons/map-marker-alt-solid.svg", alt: "Map icon" },
    { src: "assets/icons/list-alt-regular.svg", alt: "List icon" }
  ];

  constructor() {}

  ngOnInit() {}
}
