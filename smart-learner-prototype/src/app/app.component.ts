import { Component } from '@angular/core';
import OpenAI from 'openai-api';
import { OPENAI_API_KEY } from '../../config';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smart-learner-prototype';
  userMessage!: string;
  assistantReply!: string;
  test!: string;
  chatMessages: { role: string, content: string }[] = [];
  private openai = new OpenAI(OPENAI_API_KEY);// this is a not best practice, secret keys should always be stored in server side

  
  
  

  public async sendMessage() {
      const userMessage = this.userMessage;
      this.chatMessages.push({role: 'user', content: userMessage});
      const response  = await this.generateResponse(userMessage);
    console.log('key', this.openai);
      console.log(response.data);
      // const reply = chatCompletion.choices[0].toString();
      this.chatMessages.push({role: 'assistant', content: String(response.data.choices[0].text) })
    
  }

  public async generateResponse(message : string) {
    return   await this.openai.complete({
      engine: 'text-davinci-003',
      prompt: message,
      maxTokens: 256,
  });

  }
}
