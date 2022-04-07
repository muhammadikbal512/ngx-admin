import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-sandbox-create',
  templateUrl: './sandbox-create.component.html',
  styleUrls: ['./sandbox-create.component.scss']
})
export class SandboxCreateComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

}
