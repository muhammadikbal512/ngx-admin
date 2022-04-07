import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
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
  NbDatepicker,
  NbDatepickerModule,
  NbCheckboxModule,

} from "@nebular/theme";

import { IssuerRoutingModule } from "./issuer-routing.module";
import { IssuerComponent } from "./issuer.component";
import { SchemaComponent } from "./schema/schema.component";
import { SandboxComponent } from "./sandbox/sandbox.component";
import { RulesComponent } from "./rules/rules.component";
import { CardRepositoryComponent } from "./card-repository/card-repository.component";
import { ResponseBuilderComponent } from "./response-builder/response-builder.component";
import { SchemaTableComponent } from "./schema/widgets/schema-table/schema-table.component";
import { SchemaCreateComponent } from './schema/widgets/schema-create/schema-create.component';
import { SchemaEditComponent } from './schema/widgets/schema-edit/schema-edit.component';
import { SchemaCreateTableComponent } from './schema/widgets/schema-create/schema-create-table/schema-create-table.component';
import { SchemaDeleteComponent } from './schema/widgets/schema-delete/schema-delete.component';
import { SchemaCreateParameterComponent } from './schema/widgets/schema-create/schema-create-parameter/schema-create-parameter.component';
import { Ng2SmartTableModule } from "ng2-smart-table";
import { SchemaEditGeneralComponent } from './schema/widgets/schema-edit/schema-edit-general/schema-edit-general.component';
import { SchemaEditParameterComponent } from './schema/widgets/schema-edit/schema-edit-parameter/schema-edit-parameter.component';
import { SandboxTableComponent } from './sandbox/widgets/sandbox-table/sandbox-table.component';
import { SandboxCreateComponent } from './sandbox/widgets/sandbox-create/sandbox-create.component';
import { SandboxGeneralComponent } from './sandbox/widgets/sandbox-create/sandbox-general/sandbox-general.component';
import { SandboxAdvanceComponent } from './sandbox/widgets/sandbox-create/sandbox-advance/sandbox-advance.component';
import { SandboxClientComponent } from './sandbox/widgets/sandbox-create/sandbox-client/sandbox-client.component';
import { SandboxRequestComponent } from './sandbox/widgets/sandbox-create/sandbox-request/sandbox-request.component';
import { SandboxEditComponent } from './sandbox/widgets/sandbox-edit/sandbox-edit.component';
import { SandboxEditGeneralComponent } from './sandbox/widgets/sandbox-edit/sandbox-edit-general/sandbox-edit-general.component';
import { SandboxEditRequestComponent } from './sandbox/widgets/sandbox-edit/sandbox-edit-request/sandbox-edit-request.component';
import { SandboxEditAdvanceComponent } from './sandbox/widgets/sandbox-edit/sandbox-edit-advance/sandbox-edit-advance.component';
import { SandboxEditClientComponent } from './sandbox/widgets/sandbox-edit/sandbox-edit-client/sandbox-edit-client.component';
import { CardTableComponent } from './card-repository/widgets/card-table/card-table.component';
import { CardCreateComponent } from './card-repository/widgets/card-create/card-create.component';
import { CardCreateGeneralComponent } from './card-repository/widgets/card-create/card-create-general/card-create-general.component';
import { CardEditComponent } from './card-repository/widgets/card-edit/card-edit.component';
import { CardEditGeneralComponent } from './card-repository/widgets/card-edit/card-edit-general/card-edit-general.component';
import { ResponseTableComponent } from './response-builder/widgets/response-table/response-table.component';
import { ResponseCreateComponent } from './response-builder/widgets/response-create/response-create.component';
import { ResponseEditComponent } from './response-builder/widgets/response-edit/response-edit.component';
import { ResponseCreateGeneralComponent } from './response-builder/widgets/response-create/response-create-general/response-create-general.component';
import { ResponseEditGeneralComponent } from './response-builder/widgets/response-edit/response-edit-general/response-edit-general.component';

@NgModule({
  declarations: [
    SchemaComponent,
    SandboxComponent,
    RulesComponent,
    CardRepositoryComponent,
    ResponseBuilderComponent,
    IssuerComponent,
    SchemaTableComponent,
    SchemaCreateComponent,
    SchemaEditComponent,
    SchemaCreateTableComponent,
    SchemaDeleteComponent,
    SchemaCreateParameterComponent,
    SchemaEditGeneralComponent,
    SchemaEditParameterComponent,
    SandboxTableComponent,
    SandboxCreateComponent,
    SandboxGeneralComponent,
    SandboxAdvanceComponent,
    SandboxClientComponent,
    SandboxRequestComponent,
    SandboxEditComponent,
    SandboxEditGeneralComponent,
    SandboxEditRequestComponent,
    SandboxEditAdvanceComponent,
    SandboxEditClientComponent,
    CardTableComponent,
    CardCreateComponent,
    CardCreateGeneralComponent,
    CardEditComponent,
    CardEditGeneralComponent,
    ResponseTableComponent,
    ResponseCreateComponent,
    ResponseEditComponent,
    ResponseCreateGeneralComponent,
    ResponseEditGeneralComponent,
  ],
  imports: [
    CommonModule,
    IssuerRoutingModule,
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
    NbSelectModule,
    Ng2SmartTableModule,
  ],
})
export class IssuerModule {}
