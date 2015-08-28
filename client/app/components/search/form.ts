import { Component, View, EventEmitter } from 'angular2/angular2';
import { ZikService } from '../../services/zik-service';

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
                    <div class="btn-group {{ opened ? 'open': '' }}" role="group">
                        <button type="button" (click)="toggleDropdown()"
                            class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ provider }}
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a (click)="switchProvider('soundcloud')">soundcloud</a></li>
                            <li><a (click)="switchProvider('spotify')">spotify</a></li>
                        </ul>
                    </div>
                    <input type="button" class="btn btn-primary-full" type="button" (click)="trigger(searchvalue.value)" value="Rechercher" />
              </span>
            </div>
        </form>
	`
})

export class SearchForm {
    zikService: ZikService;
    search: EventEmitter;
    opened: boolean = false;
    provider: string = 'soundcloud';

    constructor(zikService: ZikService) {
        this.zikService = zikService;
        this.search = new EventEmitter();
    }

    switchProvider(provider: string) {
        this.provider = provider;
        this.opened = false;
    }

    toggleDropdown() {
        this.opened = !this.opened;
    }

    trigger(q: string) {
        this.zikService.search(this.provider, q).then(tracks => {
           this.search.next({
               tracks: tracks
           });
        });
    }
}
