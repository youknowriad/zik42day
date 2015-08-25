import { SC } from 'soundcloud';
import { Injectable } from 'angular2/angular2';
import { TrackSerializer } from './track-serializer';
import { Track } from '../model/track';

const APP_ID = '928f0a508e13315a84bee18862866d0f';
const APP_SECRET = 'cf8fb2922224e03aee902b50d312b232';

@Injectable()
export class SoundCloud {
    serializer: TrackSerializer;
    constructor(serializer: TrackSerializer) {
        this.serializer = serializer;
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
                    resolve(tracks.map(track => this.serializer.createFromSoundCloud(track)));
                }
            });
        });
    }

    embed(track: Track) {
        return new Promise((resolve, reject) => {
            SC.oEmbed(track.soundcloudUrl, { auto_play: false }, function(oEmbed: any) {
                if (oEmbed === null) {
                    reject();
                }
                resolve(oEmbed.html);
            });
        });
    }
}
