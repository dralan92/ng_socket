import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NgSocket';

  ngOnInit() : void{
      
   
   //socket.on('ranking', (data)=>console.log(data));
  }
}
