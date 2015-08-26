import { Component, View, NgFor } from 'angular2/angular2';
import { Track } from '../../model/track';
import { FlashMessages } from '../../services/flash-messages';
import { Message } from '../../model/message';

@Component({
    selector: 'flash-messages'
})

@View({
    directives: [NgFor],
    template: `
        <div class="flash-messages">
            <div *ng-for="#message of messages" class="flash-message alert alert-{{ message.type }}">
                {{ message.content }}
            </div>
        </div>
	`
})

export class FlashMessagesComponent {
    messages: Array<Message>;
    constructor(flashMessages: FlashMessages) {
        this.messages = flashMessages.messages;
    }
}
