export class Track {
    id: number;
    date: Date;
    title: string;
    description: string;
    thumbnail: string;
    soundcloudUrl: string;
    soundcloudId: number;
    spotifyId: string;
    constructor(id: number, date: Date,
                title: string, description: string, thumbnail: string = null,
                soundcloudId: number = null, soundcloudUrl: string = null,
                spotifyId: string = null) {
        this.id = id;
        this.date = date;
        this.soundcloudId = soundcloudId;
        this.soundcloudUrl = soundcloudUrl;
        this.spotifyId = spotifyId;
        this.title = title;
        this.description = description;
        this.thumbnail = thumbnail;
    }
}
