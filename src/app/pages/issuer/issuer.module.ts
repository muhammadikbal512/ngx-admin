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
  NbTreeGridModule
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
    NbTreeGridModule
  ],
})
export class IssuerModule {}
