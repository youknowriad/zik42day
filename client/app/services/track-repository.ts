import { Injectable } from 'angular2/angular2';
import { TrackSerializer } from './track-serializer';
import { Track } from '../model/track';
import { status, json } from '../utils/fetch';

const API_URL = '/back';

@Injectable()
export class TrackRepository {
    serializer: TrackSerializer;
    constructor(serializer: TrackSerializer) {
        this.serializer = serializer;
    }

    create(track: Track) {
        return window.fetch(API_URL + '/track', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.serializer.serialize(track))
        }).then(status).then(json).then((data: any) => this.serializer.unserialize(data));
    }

    findAll() {
        return window.fetch(API_URL + '/track', {
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        }).then(status).then(json).then((tracks: Array<any>) => {
            return tracks.map(data => this.serializer.unserialize(data));
        });
    }

    findForToday() {
        return window.fetch(API_URL + '/track/today', {
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        }).then(status).then(json).then((data: any) => this.serializer.unserialize(data));
    }
}
