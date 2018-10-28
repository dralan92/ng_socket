import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogsComponent } from './logs/logs.component';
import { RankingsComponent } from './rankings/rankings.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
   
    AppComponent,
    LogsComponent,
    RankingsComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
