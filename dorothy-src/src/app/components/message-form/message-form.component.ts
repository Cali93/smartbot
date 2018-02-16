import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@app/models';
import { DialogflowService } from '@app/services';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  public message: Message;

  @Input('messages')
  public messages: Message[];

  constructor(private dialogFlowService: DialogflowService) { }

  ngOnInit() {
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
      this.messages.push(
        new Message(res.result.fulfillment.speech, 'assets/images/brainai.png', res.timestamp)
      );
    });

    this.message = new Message('', 'assets/images/user.png');

  }

}
