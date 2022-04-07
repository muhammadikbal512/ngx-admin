import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcquirerComponent } from './acquirer.component';
import { DataComponent } from './data/data.component';
import { DataCreateComponent } from './data/widgets/data-create/data-create.component';
import { ObjectRepositoryComponent } from './object-repository/object-repository.component';
import { ScriptComponent } from './script/script.component';
import { ScriptCreateComponent } from './script/widgets/script-create/script-create.component';
import { ScriptEditComponent } from './script/widgets/script-edit/script-edit.component';
import { SuiteComponent } from './suite/suite.component';
import { SuiteCreateComponent } from './suite/widgets/suite-create/suite-create.component'
import { SuiteEditComponent } from './suite/widgets/suite-edit/suite-edit.component';


const routes: Routes = [
  {
    path: '',
    component: AcquirerComponent,
    children: [
      {
        path: 'object-repository',
        component: ObjectRepositoryComponent
      },
      {
        path: 'data',
        component: DataComponent
      },
      {
        path: 'data',
        children: [
          {
            path: 'create',
            component: DataCreateComponent
          },
        ]
      },
      {
        path: 'script',
        component: ScriptComponent
      },
      {
        path: 'script',
        children: [
          {
            path: 'create',
            component: ScriptCreateComponent
          },
          {
            path: 'edit',
            component: ScriptEditComponent
          }
        ]
      },
      {
        path: 'suite',
        component: SuiteComponent
      },
      {
        path: 'suite',
        children: [
          {
            path: 'create',
            component: SuiteCreateComponent
          },
          {
            path: 'edit',
            component: SuiteEditComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcquirerRoutingModule { }
