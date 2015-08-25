import { Component, View, EventEmitter } from 'angular2/angular2';
import { SoundCloud } from '../../services/soundcloud';

@Component({
    selector: 'search-form',
    events: ['search']
})

@View({
    directives: [],
    template: `
        <form (submit)="trigger(searchvalue.value)">
            <div class="input-group">
              <input type="text" #searchvalue placeholder="Titre, Artiste ..." class="form-control">
              <span class="input-group-btn">
                <input type="button" class="btn btn-primary-full" type="button" (click)="trigger(searchvalue.value)" value="Rechercher" />
              </span>
            </div>
        </form>
	`
})

export class SearchForm {
    soundCloud: SoundCloud;
    search: EventEmitter;
    constructor(soundCloud: SoundCloud) {
        this.soundCloud = soundCloud;
        this.search = new EventEmitter();
    }

    trigger(q: string) {
        this.soundCloud.search(q).then(tracks => {
           this.search.next({
               tracks: tracks
           });
        });
    }
}
