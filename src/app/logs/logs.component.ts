import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Logs } from '../../../node_modules/@types/selenium-webdriver';


@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {


  socket = socketIo('http://localhost:3000');
  dealer_log = [];

  constructor() { 
    this.socket.on('log', (data)=>{
     this.dealer_log = data;
      console.log(this.dealer_log);
      });
  }

  ngOnInit() {
    

  }

}
