import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {LearningBaseComponent} from "../learning-base.component";
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LearningBaseComponent,
    data: {
      title: 'Learning base'
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
export class LearningBaseRoutingModule {

}
