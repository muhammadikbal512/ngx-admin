import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'ngx-data-create',
  templateUrl: './data-create.component.html',
  styleUrls: ['./data-create.component.scss']
})
export class DataCreateComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

}
