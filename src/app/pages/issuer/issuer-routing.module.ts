import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardRepositoryComponent } from "./card-repository/card-repository.component";
import { CardCreateComponent } from "./card-repository/widgets/card-create/card-create.component";
import { CardEditComponent } from "./card-repository/widgets/card-edit/card-edit.component";

import { IssuerComponent } from "./issuer.component";
import { ResponseBuilderComponent } from "./response-builder/response-builder.component";
import { ResponseCreateComponent } from "./response-builder/widgets/response-create/response-create.component";
import { ResponseEditComponent } from "./response-builder/widgets/response-edit/response-edit.component";
import { RulesComponent } from "./rules/rules.component";
import { SandboxComponent } from "./sandbox/sandbox.component";
import { SandboxCreateComponent } from "./sandbox/widgets/sandbox-create/sandbox-create.component";
import { SandboxEditComponent } from "./sandbox/widgets/sandbox-edit/sandbox-edit.component";
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
        path: 'sandbox',
        children: [
          {
            path: 'create',
            component: SandboxCreateComponent
          },
          {
            path: 'edit',
            component: SandboxEditComponent
          }
        ]
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
        path: 'card-repository',
        children: [
          {
            path: 'create',
            component: CardCreateComponent
          },
          {
            path: 'edit',
            component: CardEditComponent
          }
        ]
      },
      {
        path: "response-builder",
        component: ResponseBuilderComponent,
      },
      {
        path: 'response-builder',
        children: [
          {
            path: 'create',
            component: ResponseCreateComponent
          },
          {
            path: 'edit',
            component: ResponseEditComponent
          }
        ]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IssuerRoutingModule {}
