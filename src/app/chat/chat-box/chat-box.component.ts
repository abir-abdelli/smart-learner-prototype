import { Component } from '@angular/core';
import { OpenaiService } from '../openai.service'

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent {
  title = 'smart-learner-prototype';
  userMessage!: string;
  chatMessages: { role: string, content: string }[] = [];

  constructor(private chat: OpenaiService) { }



  public async sendMessage() {
    const userMessage = this.userMessage;
    this.chatMessages.push({ role: 'user', content: userMessage });
    const response = await this.chat.generateResponse(userMessage);

    this.chatMessages.push({ role: 'assistant', content: String(response) })

  }
}

