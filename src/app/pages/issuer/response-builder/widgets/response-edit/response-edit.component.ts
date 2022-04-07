import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-response-edit',
  templateUrl: './response-edit.component.html',
  styleUrls: ['./response-edit.component.scss']
})
export class ResponseEditComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

}
