import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-map-location-modal",
  templateUrl: "./map-location-modal.component.html",
  styleUrls: ["./map-location-modal.component.scss"]
})
export class MapLocationModalComponent implements OnInit {
  @Input() name: string;
  @Input() imgSrc: string;
  @Input() description: string;

  @Output() close: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public onClickClose(): void {
    this.close.emit();
  }
}
