import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "ngx-suite-create",
  templateUrl: "./suite-create.component.html",
  styleUrls: ["./suite-create.component.scss"],
})
export class SuiteCreateComponent implements OnInit {
  constructor(private _location: Location) {}

  ngOnInit(): void {}

  backClicked() {
    this._location.back();
  }
}
