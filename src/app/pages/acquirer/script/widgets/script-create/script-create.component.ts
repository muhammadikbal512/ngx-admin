import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-script-create',
  templateUrl: './script-create.component.html',
  styleUrls: ['./script-create.component.scss']
})
export class ScriptCreateComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back()
  }

}
