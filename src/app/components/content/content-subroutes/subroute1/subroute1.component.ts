import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-subroute1',
  templateUrl: './subroute1.component.html',
  styleUrls: ['./subroute1.component.css']
})
export class Subroute1Component implements OnInit {

  message: string ='';

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  setMessage(message: string): void{
    this.messageService.getSubject().next(message);
  }

  sendMessage(): void{
    this.setMessage(this.message);
    console.log('send message');
  }

}
