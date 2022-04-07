import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'ngx-script-edit',
  templateUrl: './script-edit.component.html',
  styleUrls: ['./script-edit.component.scss']
})
export class ScriptEditComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

}
