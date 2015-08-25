import { Injectable } from 'angular2/angular2';
import { Track } from '../model/track';

@Injectable()
export class TrackSerializer {
    createFromSoundCloud(data: any) {
        return new Track(
            null, null,
            data.id,
            data.uri,
            data.title,
            data.description,
            data.artwork_url ? data.artwork_url : null
        );
    }

    serialize(track: Track) {
        return {
            soundcloudId: track.soundcloudId,
            soundcloudUrl: track.soundcloudUrl,
            title: track.title,
            description: track.description,
            thumbnail: track.thumbnail
        }
    }

    unserialize(data: any) {
        return new Track(
            data.id,
            new Date(data.date),
            data.soundcloudId,
            data.soundcloudUrl,
            data.title,
            data.description,
            data.thumbnail
        );
    }
}
