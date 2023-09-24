import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { OpenaiService } from './openai.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChatBoxComponent], // Add ChatBoxComponent to declarations
  imports: [
    CommonModule, 
    FormsModule
  ],
  providers: [OpenaiService],
  exports: [ChatBoxComponent],

})
export class ChatModule { }
