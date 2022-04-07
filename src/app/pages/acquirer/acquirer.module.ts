import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AcquirerRoutingModule } from "./acquirer-routing.module";
import { AcquirerComponent } from "./acquirer.component";
import { ObjectRepositoryComponent } from "./object-repository/object-repository.component";
import { DataComponent } from "./data/data.component";
import { ScriptComponent } from "./script/script.component";
import { SuiteComponent } from "./suite/suite.component";

import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbTreeGridModule,
  NbSidebarModule,
  NbLayoutModule,
  NbInputModule,
  NbDatepickerModule,
  NbCheckboxModule,
} from "@nebular/theme";
import { DataCreateComponent } from './data/widgets/data-create/data-create.component';
import { ScriptTableComponent } from './script/widgets/script-table/script-table.component';
import { ScriptCreateComponent } from './script/widgets/script-create/script-create.component';
import { ScriptGeneralComponent } from "./script/widgets/script-create/script-general/script-general.component";
import { ScriptEditComponent } from './script/widgets/script-edit/script-edit.component';
import { ScriptEditGeneralComponent } from './script/widgets/script-edit/script-edit-general/script-edit-general.component';
import { SuiteTableComponent } from './suite/widgets/suite-table/suite-table.component';
import { SuiteCreateComponent } from './suite/widgets/suite-create/suite-create.component';
import { SuiteEditComponent } from './suite/widgets/suite-edit/suite-edit.component';

@NgModule({
  declarations: [
    AcquirerComponent,
    ObjectRepositoryComponent,
    DataComponent,
    ScriptComponent,
    SuiteComponent,
    DataCreateComponent,
    ScriptTableComponent,
    ScriptCreateComponent,
    ScriptGeneralComponent,
    ScriptEditComponent,
    ScriptEditGeneralComponent,
    SuiteTableComponent,
    SuiteCreateComponent,
    SuiteEditComponent
  ],
  imports: [
    CommonModule,
    AcquirerRoutingModule,
    NbButtonModule,
    NbCardModule,
    NbProgressBarModule,
    NbTabsetModule,
    NbUserModule,
    NbIconModule,
    NbSelectModule,
    NbListModule,
    NbTreeGridModule,
    NbSidebarModule,
    NbLayoutModule,
    NbInputModule,
    NbDatepickerModule,
    NbCheckboxModule,
  ],
})
export class AcquirerModule {}
