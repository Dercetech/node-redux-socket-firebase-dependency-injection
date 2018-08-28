import { Component } from '@angular/core';
import { ChatService } from './shared/services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(chatService: ChatService) {
    chatService.initSocket();
  }
}
