/// <reference path="../custom.d.ts" />

import { bootstrap, bind } from 'angular2/angular2';
import { routerInjectables, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import { App } from './components/app';
import { ZikService } from './services/zik-service';
import { TrackSerializer } from './services/track-serializer';
import { TrackRepository } from './services/track-repository';
import { FlashMessages } from './services/flash-messages';
import { ZikProviderFactory } from './services/provider/factory';

var universalInjectables = [
    routerInjectables,
    ZikService,
    TrackSerializer,
    TrackRepository,
    ZikProviderFactory,
    FlashMessages,
    bind(LocationStrategy).toClass(HashLocationStrategy)
];

bootstrap(App, [universalInjectables]);
