import { Component } from '@angular/core';
import OpenAI from 'openai';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smart-learner-prototype';
  userMessage!: string;
  assistantReply!: string;
  chatMessages: { role: string, content: string }[] = [];
  
  

  public async sendMessage() {
    const openai = new OpenAI({
      apiKey: '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',
      dangerouslyAllowBrowser: true
    });
      const userMessage = this.userMessage;
      this.chatMessages.push({role: 'user', content: userMessage});
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
      });
    
      const reply = chatCompletion.choices[0].toString();
      this.chatMessages.push({role: 'assistant', content: reply})
    
  }
}
