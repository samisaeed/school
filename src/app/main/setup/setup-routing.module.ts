import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Setup'
    },
    children: [
      {
        path: '',
        redirectTo: 'divisions'
      },
      {
        path: 'divisions',
        loadChildren: () => import('./division/division.module').then(m => m.DivisionModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, ]
})
export class SetupRoutingModule { }
