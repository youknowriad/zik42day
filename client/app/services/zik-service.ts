import { Injectable } from 'angular2/angular2';
import { ZikProviderFactory } from './provider/factory';
import { Track } from '../model/track';

@Injectable()
export class ZikService {
    factory : ZikProviderFactory;
    constructor(factory: ZikProviderFactory) {
        this.factory = factory;
    }

    search(type: string, q: string) {
        return this.factory.getProvider(type).search(q);
    }

    embed(track: Track, options = { width: 320, height: 200 }) {
        let type: string;
        if (track.soundcloudId) {
            type = 'soundcloud'
        } else if (track.spotifyId) {
            type = 'spotify';
        } else {
            throw new Error('Unknown Track Player');
        }

        return this.factory.getProvider(type).embed(track, options);
    }
}
