import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-response-create',
  templateUrl: './response-create.component.html',
  styleUrls: ['./response-create.component.scss']
})
export class ResponseCreateComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

}
