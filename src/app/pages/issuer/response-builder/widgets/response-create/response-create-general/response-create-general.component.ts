import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-response-create-general',
  templateUrl: './response-create-general.component.html',
  styleUrls: ['./response-create-general.component.scss']
})
export class ResponseCreateGeneralComponent implements OnInit {
  data: any[];

  constructor() { 
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit(): void {
  }

  settings = {
    // selectMode: 'multi',
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
    responseCode: {
      title: 'Response Code',
      type: 'string',
      filter: false
    },
    description: {
      title: 'Description',
      type: 'string',
      filter: false
    },
    decisionInfo: {
      title: 'Decision Info',
      type: 'string',
      filter: false
    },
    processingCode: {
      title: 'Processing Code',
      type:'string',
      filter: false
    },
    ResponseCodeMap: {
      title: 'Response Code Map',
      type: 'string',
      filter: false
    }
    }
  };

  source: LocalDataSource;

  

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }


}
