import { Component, View, EventEmitter } from 'angular2/angular2';
import { Track } from '../../model/track';
import { TrackRepository } from '../../services/track-repository';
import { FlashMessages } from '../../services/flash-messages';

@Component({
    selector: 'track-create-form',
    properties: ['track: track'],
    events: ['create', 'cancel']
})

@View({
    directives: [],
    template: `
        <div class="track-create-form">
            <a class="close" (click)="close()">&times;</a>
            <form (^submit)="publish(title.value, description.value)" class="center">
                <h1>Publier la zik du jour</h1>
                <div class="form-group pad-top">
                    <label>Titre</label>
                    <input class="form-control" #title [value]="track.title" type="text" placeholder="Track Title">
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control" #description placeholder="Track Description">{{ track.description }}</textarea>
                </div>
                <button class="btn btn-primary-full" type="submit">Publier</button>
            </form>
        </div>
	`
})

export class TrackCreateForm {
    repository: TrackRepository;
    flashMessages: FlashMessages;
    track: Track;
    create: EventEmitter;
    cancel: EventEmitter;
    constructor(repository: TrackRepository, flashMessages: FlashMessages) {
        this.repository = repository;
        this.flashMessages = flashMessages;
        this.create = new EventEmitter();
        this.cancel = new EventEmitter();
    }

    publish(title: string, description: string) {
        this.track.title = title;
        this.track.description = description;
        this.repository.create(this.track).then((track: Track) => {
            this.create.next({
                track: track
            });
            this.flashMessages.push('Musique du jour publiée avec succès', 'success');
        }).catch(() => {
            this.flashMessages.push('Impossible de publier la musique du jour', 'danger');
            this.cancel.next(null);
        });
    }

    close() {
        this.cancel.next(null);
    }
}
