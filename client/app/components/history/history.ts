import { Component, View, NgFor, NgIf } from 'angular2/angular2';
import { TrackResume } from '../track/resume';
import { Track } from '../../model/track';
import { TrackRepository } from '../../services/track-repository';

@Component({
    selector: 'track-history'
})

@View({
    directives: [NgFor, NgIf, TrackResume],
    template: `
        <section class="center pad-top">
            <section *ng-if="tracks.length !== 0">
                <div class="tracks">
                    <track-resume *ng-for="#track of tracks" [track]="track"></track-resume>
                </div>
            </section>
        </section>
	`
})

export class TrackHistory {
    tracks: Array<Track>;
    repository: TrackRepository;
    constructor(repository: TrackRepository) {
        this.tracks = [];
        repository.findAll().then((tracks: Array<Track>) => {
            this.tracks = tracks;
        })
    }

    updateTracks(tracks: Array<Track>) {
        this.tracks = tracks;
    }

    activate() {
        console.log('on activate');
    }
}
