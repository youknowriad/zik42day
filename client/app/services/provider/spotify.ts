import { SC } from 'soundcloud';
import { Track } from '../../model/track';
import { ZikProvider } from './zik-provider';
import { status, json } from '../../utils/fetch';

export class SpotifyProvider implements ZikProvider {
    search(q: string) {
        return window.fetch('https://api.spotify.com/v1/search?q=' + encodeURI(q) + '&type=track')
            .then(status)
            .then(json)
            .then((data: any) => {
                return data.tracks.items.map((trackData: any) => this.getTrack(trackData));
            });
    }

    embed(track: Track, options = { width: 320, height: 200 }) {
        return new Promise(resolve => {
            resolve('<iframe src="http://embed.spotify.com/?uri=spotify:track:' + track.spotifyId + '" width="' + options.width + '" height="' + options.height + '" frameborder="0" allowtransparency="true"></iframe>');
        });
    }

    getTrack(data: any) {
        let artist = data.artists.map((artist: any) => artist.name).join(' feat ');
        let name = artist ? artist + ' - ' + data.name : data.name;
        return new Track(
            null, null,
            name, name, null,
            null, null,
            data.id
        );
    }
}
