import { Injectable } from '@angular/core';
import OpenAI from 'openai-api';
import { OPENAI_API_KEY } from '../../../config';


@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private openai: any;

  constructor() {
    this.openai = new OpenAI(OPENAI_API_KEY);
  }


  public generateResponse(message: string) {
    return this.openai.complete({
      engine: "text-davinci-003",
      prompt: message,
      maxTokens: 256
    }).then((response: { data: { choices: { text: any; }[]; }; }) => {
      return response.data.choices[0].text;
    }).catch((error: any) => {
      return error;
    });
  }

}
