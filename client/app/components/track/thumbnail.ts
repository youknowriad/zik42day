import { Component, View, NgIf, EventEmitter } from 'angular2/angular2';
import { Track } from '../../model/track';
import { TrackPlayer } from './player';

@Component({
    selector: 'track-thumbnail',
    properties: ['track: track'],
    events: ['select']
})

@View({
    directives: [NgIf, TrackPlayer],
    template: `
        <div class="track-thumbnail" (^click)="click()">
            <div class="thumbnail">
                <div class="caption">
                    <h3 class="track-title">{{ track.title }}</h3>
                    <p class="track-description"><small>{{ track.description }}</small></p>
                </div>

                <track-player [track]="track"></track-player>
            </div>
        </div>
	`
})

export class TrackThumbnail {
    track: Track;
    select: EventEmitter;
    constructor() {
        this.select = new EventEmitter();
    }
    click() {
        this.select.next({
            track: this.track
        });
    }
}
