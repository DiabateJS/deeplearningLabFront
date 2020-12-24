import { NgModule } from '@angular/core';
import {TrainNetworkRoutingModule} from "./train-network-routing/train-network-routing.module";
import {TrainNetworkComponent} from "./train-network.component";
@NgModule({
  imports: [
    TrainNetworkRoutingModule
  ],
  declarations: [ TrainNetworkComponent  ],
  providers: []
})
export class TrainNetworkModule {}
