import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subjectTitle: string = "";

  constructor(private messageService: MessageService,
              private authService: AuthService) { }

  ngOnInit() {
    this.messageService.getSubject().subscribe( data => {
      this.subjectTitle = data;
    });
  }

  logout(): void{
    this.authService.logout();
  }

  loggedIn(): boolean{
    return this.authService.loggedIn();
  }

}
