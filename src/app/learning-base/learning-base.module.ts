import { NgModule } from '@angular/core';
import {LearningBaseComponent} from "./learning-base.component";
import {LearningBaseRoutingModule} from "./learning-base-routing/learning-base-routing.module";
@NgModule({
  imports: [
    LearningBaseRoutingModule
  ],
  declarations: [ LearningBaseComponent  ],
  providers: []
})
export class LearningBaseModule {

}
