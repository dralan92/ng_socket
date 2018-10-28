import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DEALER DETAILS';
  show_log = false;
  show_rankings = false;
  togglelogs() {   
   this.show_log = !this.show_log;
  }
  toggleRankings() {   
    this.show_rankings = !this.show_rankings;
   }
  ngOnInit() : void{
      
  
  }

  
}
