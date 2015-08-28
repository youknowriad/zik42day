import { Component, View } from 'angular2/angular2';
import { Track } from '../../model/track';
import { ZikService } from '../../services/zik-service';

@Component({
    selector: 'track-player',
    properties: [
        'track: track',
        'width: width',
        'height: height'
    ]
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
    width: number = 320;
    height: number = 200;
    constructor(zikService: ZikService) {
        setTimeout(() => {
            zikService.embed(this.track, { width: this.width, height: this.height }).then((html: string) => {
                this.html = html;
            });
        }, 100);
    }
}
