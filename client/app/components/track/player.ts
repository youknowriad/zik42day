import { Component, View } from 'angular2/angular2';
import { Track } from '../../model/track';
import { SoundCloud } from '../../services/soundcloud';

@Component({
    selector: 'track-player',
    properties: ['track: track']
})

@View({
    directives: [],
    template: `
        <div inner-html="{{ html }}" class="track-player"></div>
	`
})

export class TrackPlayer {
    track: Track;
    html: string = '';
    constructor(soundCloud: SoundCloud) {
        setTimeout(() => {
            if (this.track.soundcloudUrl) {
                soundCloud.embed(this.track).then((html: string) => {
                    this.html = html;
                });
            }
        }, 100);
    }
}
