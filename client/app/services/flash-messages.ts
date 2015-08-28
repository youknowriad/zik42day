import { Injectable } from 'angular2/angular2';
import { Message } from '../model/message';

@Injectable()
export class FlashMessages {
    messages: Array<Message> = [];

    push(content: string, type: string = 'info', ttl: number = 6000) {
        let message = new Message(content, type);
        this.messages.push(message);
        setTimeout(() => {
            this.messages.splice(this.messages.indexOf(message), 1);
        }, ttl);
    }
}
