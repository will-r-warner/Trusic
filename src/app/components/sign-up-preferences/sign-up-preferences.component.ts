import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sign-up-preferences",
  templateUrl: "./sign-up-preferences.component.html",
  styleUrls: ["./sign-up-preferences.component.scss"]
})
export class SignUpPreferencesComponent implements OnInit {
  public genres: string[] = [
    "ROCK",
    "POP",
    "RAP",
    "COUNTRY",
    "FOLK",
    "INDIE",
    "R&B",
    "JAZZ",
    "REGGAE",
    "BLUES",
    "METAL",
    "PUNK",
    "EDM",
    "CLASSICAL",
    "INSTRUMENTAL",
    "HOUSE",
    "BLUEGRASS",
    "WORLD"
  ];

  constructor() {}

  ngOnInit() {}
}
