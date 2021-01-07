import { NgModule } from '@angular/core';
import {NetworkComponent} from "./network.component";
import {NetworkRoutingModule} from "./network-routing/network-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NetworkRoutingModule
  ],
  declarations: [ NetworkComponent  ],
  providers: []
})
export class NetworkModule {

}
