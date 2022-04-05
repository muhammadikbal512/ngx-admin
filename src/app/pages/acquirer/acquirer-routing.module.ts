import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcquirerComponent } from './acquirer.component';
import { DataComponent } from './data/data.component';
import { ObjectRepositoryComponent } from './object-repository/object-repository.component';
import { ScriptComponent } from './script/script.component';
import { SuiteComponent } from './suite/suite.component';

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
        path: 'script',
        component: ScriptComponent
      },
      {
        path: 'suite',
        component: SuiteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcquirerRoutingModule { }
