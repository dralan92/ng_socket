import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

  socket = socketIo('http://localhost:3000');
  rankings = [];
  constructor() {
    this.socket.on('ranking', (data)=>{
      this.rankings = data;
       console.log(this.rankings);
       });
   }

  ngOnInit() {
  }

}
