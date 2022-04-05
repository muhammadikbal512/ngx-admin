import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardRepositoryComponent } from "./card-repository/card-repository.component";

import { IssuerComponent } from "./issuer.component";
import { ResponseBuilderComponent } from "./response-builder/response-builder.component";
import { RulesComponent } from "./rules/rules.component";
import { SandboxComponent } from "./sandbox/sandbox.component";
import { SchemaComponent } from "./schema/schema.component";
import { SchemaCreateComponent } from "./schema/widgets/schema-create/schema-create.component";
import { SchemaEditComponent } from "./schema/widgets/schema-edit/schema-edit.component";

const routes: Routes = [
  {
    path: "",
    component: IssuerComponent,
    children: [
      {
        path: "schema",
        component: SchemaComponent,
      },
      {
        path: "schema",
        children: [
          {
            path: "create",
            component: SchemaCreateComponent,
          },
          {
            path: "edit",
            component: SchemaEditComponent,
          },
        ],
      },

      {
        path: "sandbox",
        component: SandboxComponent,
      },
      {
        path: "rules",
        component: RulesComponent,
      },
      {
        path: "card-repository",
        component: CardRepositoryComponent,
      },
      {
        path: "response-builder",
        component: ResponseBuilderComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IssuerRoutingModule {}
