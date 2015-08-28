import { SC } from 'soundcloud';
import { Track } from '../../model/track';
import { ZikProvider } from './zik-provider';

const APP_ID = '928f0a508e13315a84bee18862866d0f';

export class SoundCloudProvider implements ZikProvider {
    constructor() {
        SC.initialize({
            client_id: APP_ID
        });
    }

    search(q: string) {
        return new Promise((resolve, reject) => {
            SC.get('/tracks', { q: q }, (tracks: Array<any>, error: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(tracks.map(track => this.getTrack(track)));
                }
            });
        });
    }

    embed(track: Track, options = { width: 320, height: 200 }) {
        return new Promise((resolve, reject) => {
            SC.oEmbed(track.soundcloudUrl, { auto_play: false, maxheight: options.height }, function(oEmbed: any) {
                if (oEmbed === null) {
                    reject();
                }
                resolve(oEmbed.html);
            });
        });
    }

    getTrack(data: any) {
        return new Track(
            null, null,
            data.title, data.description, data.artwork_url ? data.artwork_url : null,
            data.id, data.uri
        );
    }
}
