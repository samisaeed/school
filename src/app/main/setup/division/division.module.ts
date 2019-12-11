import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivisionComponent } from './division.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DivisionComponent,
    data: {
      title: 'Division'
    }
  }
];
@NgModule({
  declarations: [DivisionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class DivisionModule { }
