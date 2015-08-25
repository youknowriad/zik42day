import { Component, View, NgFor, NgIf } from 'angular2/angular2';
import { TrackThumbnail } from '../track/thumbnail';
import { SearchForm } from './form';
import { Track } from '../../model/track';
import { TrackRepository } from '../../services/track-repository';

@Component({
    selector: 'search'
})

@View({
    directives: [NgFor, NgIf, TrackThumbnail, SearchForm],
    template: `
        <section class="center pad-top">
            <search-form (search)="updateTracks($event.tracks)"></search-form>

            <section *ng-if="tracks.length !== 0">
                <div class="tracks">
                    <track-thumbnail *ng-for="#track of tracks" [track]="track" (select)="publish(track)"></track-thumbnail>
                </div>
            </section>
        </section>
	`
})

export class Search {
    tracks: Array<Track>;
    repository: TrackRepository;
    constructor(repository: TrackRepository) {
        this.tracks = [];
        this.repository = repository;
    }

    updateTracks(tracks: Array<Track>) {
        this.tracks = tracks;
    }

    publish(track: Track) {
        this.repository.create(track);
    }
}
