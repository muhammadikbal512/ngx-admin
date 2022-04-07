import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-sandbox-request',
  templateUrl: './sandbox-request.component.html',
  styleUrls: ['./sandbox-request.component.scss']
})
export class SandboxRequestComponent implements OnInit {

  data: any[];

  constructor() { 
    this.source = new LocalDataSource(this.data);
  }
  ngOnInit(): void {
  }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
        filter: false
      },
      parameter: {
        title: 'Parameter',
        type: 'string',
        filter: false
      },
      respTimeOut: {
        title: 'Resp. Timeout',
        type: 'string',
        filter: false
      },
      respDelay: {
        title: 'Resp, Delay',
        type: 'string',
        filter: false
      }
    },
  };

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'name',
        search: query
      },
    ], false); 
  }

  source: LocalDataSource;

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
