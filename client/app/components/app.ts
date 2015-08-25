import { Component, View } from 'angular2/angular2';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';
import { Search } from './search/search';
import { TrackHistory } from './history/history';

@Component({
    selector: 'app'
})

@View({
    directives: [RouterLink, RouterOutlet],
    template: `
        <header class="application-header">
            <a id="main-logo" class="logo" ng-href="#/">Zik4<span>2day</span></a>

            <nav id="main-menu" class="pad-left">
                <ul>
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
                        <p>Que'est ce qu'on écoute aujourd'hui ?</p>
                    </div>
                </div>
            </div>
        </section>

        <router-outlet></router-outlet>
	`
})

@RouteConfig([
    { path: '/',        redirectTo: '/search' },
    { path: '/search',  as: 'search',  component: Search },
    { path: '/history', as: 'history', component: TrackHistory }
])

export class App {}
