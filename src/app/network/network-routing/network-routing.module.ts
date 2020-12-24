import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {NetworkComponent} from "../network.component";
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NetworkComponent,
    data: {
      title: 'Networks'
    }
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NetworkRoutingModule { }
