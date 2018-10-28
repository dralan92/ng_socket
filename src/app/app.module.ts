import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogsComponent } from './logs/logs.component';
import { RankingsComponent } from './rankings/rankings.component';

@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    RankingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
