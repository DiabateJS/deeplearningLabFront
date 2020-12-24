import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {UiElementsComponent} from "../ui-elements.component";
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UiElementsComponent,
    data: {
      title: 'UI Elements'
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
export class UiElementsRoutingModule { }
