import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcquirerRoutingModule } from './acquirer-routing.module';
import { AcquirerComponent } from './acquirer.component';
import { ObjectRepositoryComponent } from './object-repository/object-repository.component';
import { DataComponent } from './data/data.component';
import { ScriptComponent } from './script/script.component';
import { SuiteComponent } from './suite/suite.component';


@NgModule({
  declarations: [
    AcquirerComponent,
    ObjectRepositoryComponent,
    DataComponent,
    ScriptComponent,
    SuiteComponent
  ],
  imports: [
    CommonModule,
    AcquirerRoutingModule
  ]
})
export class AcquirerModule { }
