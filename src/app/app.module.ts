import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';
import { ControlTableComponent } from './control/control-table/control-table.component';
import { StateIconComponent } from './control/state-icon/state-icon.component';
import { StatusBarComponent } from './status-bar/status-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    ControlTableComponent,
    StateIconComponent,
    StatusBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
