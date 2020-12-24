import { NgModule } from '@angular/core';
import {ConfigRoutingModule} from "./config-routing/config-routing.module";
import {ConfigComponent} from "./config.component";
@NgModule({
  imports: [
    ConfigRoutingModule
  ],
  declarations: [ ConfigComponent  ],
  providers: []
})
export class ConfigModule {}
