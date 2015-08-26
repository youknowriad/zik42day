import { Component, View } from 'angular2/angular2';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';
import { Search } from './search/search';
import { TrackHistory } from './history/history';
import { TrackToday } from './history/today';
import { FlashMessagesComponent } from './utils/flash-messages';

@Component({
    selector: 'app'
})

@View({
    directives: [RouterLink, RouterOutlet, FlashMessagesComponent],
    template: `
        <header class="application-header">
            <a id="main-logo" class="logo" ng-href="#/">Zik4<span>2day</span></a>

            <nav id="main-menu" class="pad-left">
                <ul>
                    <li>
                        <a [router-link]="['/today']">Zik du jour</a>
                    </li>
                    <li>
                        <a [router-link]="['/search']">Nouvelle zik</a>
                    </li>
                    <li>
                        <a [router-link]="['/history']">Historique</a>
                    </li>
                </ul>
            </nav>
        </header>

        <section class="sub-header">
            <div class="container">
                <div class="slogan">
                    <div class="center">
                        <p>Qu'est-ce qu'on écoute aujourd'hui ?</p>
                    </div>
                </div>
            </div>
        </section>

        <router-outlet></router-outlet>

        <flash-messages></flash-messages>
	`
})

@RouteConfig([
    { path: '/',        redirectTo: '/today' },
    { path: '/search',  as: 'search',  component: Search },
    { path: '/today',   as: 'today',   component: TrackToday },
    { path: '/history', as: 'history', component: TrackHistory }
])

export class App {}
