/// <reference path="../typings/tsd.d.ts" />

import { bootstrap, bind } from 'angular2/angular2';
import { routerInjectables, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import { App } from './components/app';
import { SoundCloud } from './services/soundcloud';
import { TrackSerializer } from './services/track-serializer';
import { TrackRepository } from './services/track-repository';
import { FlashMessages } from './services/flash-messages';

var universalInjectables = [
    routerInjectables,
    SoundCloud,
    TrackSerializer,
    TrackRepository,
    FlashMessages,
    bind(LocationStrategy).toClass(HashLocationStrategy)
];

bootstrap(App, [universalInjectables]);
