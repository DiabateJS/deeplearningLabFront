import { NgModule } from '@angular/core';
import {LearningBaseComponent} from "./learning-base.component";
import {LearningBaseRoutingModule} from "./learning-base-routing/learning-base-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    LearningBaseRoutingModule
  ],
  declarations: [ LearningBaseComponent  ],
  providers: []
})
export class LearningBaseModule {

}
