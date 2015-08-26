import { Component, View, NgFor, NgIf } from 'angular2/angular2';
import { Router } from 'angular2/router';
import { TrackThumbnail } from '../track/thumbnail';
import { SearchForm } from './form';
import { TrackCreateForm } from '../track/create';
import { Track } from '../../model/track';
import { TrackRepository } from '../../services/track-repository';

@Component({
    selector: 'search'
})

@View({
    directives: [NgFor, NgIf, TrackThumbnail, SearchForm, TrackCreateForm],
    template: `
        <section class="center pad-top">
            <search-form (search)="updateTracks($event.tracks)"></search-form>

            <section *ng-if="tracks.length !== 0" class="pad-top">
                <div class="tracks">
                    <track-thumbnail *ng-for="#track of tracks" [track]="track" (select)="select(track)"></track-thumbnail>
                </div>
            </section>

            <track-create-form *ng-if="selectedTrack" [track]="selectedTrack" (create)="created()" (cancel)="unselect()"></track-create-form>
        </section>
	`
})

export class Search {
    tracks: Array<Track>;
    repository: TrackRepository;
    selectedTrack: Track = null;
    router: Router;
    constructor(repository: TrackRepository, router: Router) {
        this.tracks = [];
        this.repository = repository;
        this.router = router;
    }

    updateTracks(tracks: Array<Track>) {
        this.tracks = tracks;
    }

    select(track: Track) {
        this.selectedTrack = track;
    }

    unselect() {
        this.selectedTrack = null;
    }

    created() {
        this.router.navigate('/today');
    }
}
