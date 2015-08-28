import { Injectable } from 'angular2/angular2';
import { Track } from '../model/track';

@Injectable()
export class TrackSerializer {
    serialize(track: Track) {
        return {
            soundcloudId: track.soundcloudId,
            soundcloudUrl: track.soundcloudUrl,
            title: track.title,
            description: track.description,
            thumbnail: track.thumbnail,
            spotifyId: track.spotifyId
        }
    }

    unserialize(data: any) {
        return new Track(
            data.id, new Date(data.date),
            data.title, data.description, data.thumbnail,
            data.soundcloudId, data.soundcloudUrl,
            data.spotifyId
        );
    }
}
