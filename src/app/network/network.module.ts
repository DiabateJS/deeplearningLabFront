import { NgModule } from '@angular/core';
import {NetworkComponent} from "./network.component";
import {NetworkRoutingModule} from "./network-routing/network-routing.module";
@NgModule({
  imports: [
    NetworkRoutingModule
  ],
  declarations: [ NetworkComponent  ],
  providers: []
})
export class NetworkModule {

}
