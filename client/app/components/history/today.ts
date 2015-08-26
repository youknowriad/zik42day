import { Component, View, NgIf } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { TrackResume } from '../track/resume';
import { Track } from '../../model/track';
import { TrackRepository } from '../../services/track-repository';

@Component({
    selector: 'track-today'
})

@View({
    directives: [NgIf, TrackResume, RouterLink],
    template: `
        <section class="center pad-top">
            <section *ng-if="track !== null">
                <track-resume [track]="track"></track-resume>
            </section>

            <p *ng-if="!loading">Aucune musique n'a été proposée aujourd'hui. <a [router-link]="['/search']">Publier un morceau ?</a></p>
        </section>
	`
})

export class TrackToday {
    track: Track = null;
    repository: TrackRepository;
    loading: boolean;
    constructor(repository: TrackRepository) {
        this.loading = true;
        repository.findForToday().then(track => {
            this.track = track;
            this.loading = false;
        });
    }
}
