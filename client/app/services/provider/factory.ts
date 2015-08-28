import { Injectable } from 'angular2/angular2';
import { SoundCloudProvider } from './soundcloud';
import { SpotifyProvider } from './spotify';
import { ZikProvider } from './zik-provider';

@Injectable()
export class ZikProviderFactory {
    getProvider(type: string) : ZikProvider {
        switch (type) {
            case 'soundcloud':
                return new SoundCloudProvider();
            case 'spotify':
                return new SpotifyProvider();
            default:
                throw new Error('Unknown provider ' + type);
        }
    }
}
