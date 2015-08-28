import { Component, View } from 'angular2/angular2';
import { Track } from '../../model/track';
import { TrackPlayer } from './player';

@Component({
    selector: 'track-resume',
    properties: ['track: track']
})

@View({
    directives: [TrackPlayer],
    template: `
        <div class="track-resume" (^click)="click()">
            <h2 class="track-date pull-right">{{ track.date | date }}</h2>

            <div class="caption">
                <h3 class="track-title">{{ track.title }}</h3>
                <p class="track-description"><small>{{ track.description }}</small></p>
            </div>

            <track-player [track]="track" [height]="400" [width]="1000"></track-player>
        </div>
	`
})

export class TrackResume {
    track: Track;
}
