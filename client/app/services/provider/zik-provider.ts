import {Track} from '../../model/track';

export interface ZikProvider {
    search(q: string) : Promise<Array<Track>>;
    embed(track: Track, options: Object) : Promise<string>;
}
