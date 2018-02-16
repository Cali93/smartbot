import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@app/models';

@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  @Input('message')
  public message: Message;

  constructor() { }

  ngOnInit() {
    window.setInterval(function() {
      const elem = document.getElementById('data');
      elem.scrollTop = elem.scrollHeight;
    }, 1000);
  }

}
