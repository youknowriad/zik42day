export class Track {
    id: Number;
    date: Date;
    title: string;
    description: string;
    thumbnail: string;
    soundcloudUrl: string;
    soundcloudId: Number;
    constructor(id: Number, date: Date, soundcloudId: Number, soundcloudUrl: string, title: string, description: string, thumbnail: string = null) {
        this.id = id;
        this.date = date;
        this.soundcloudId = soundcloudId;
        this.soundcloudUrl = soundcloudUrl;
        this.title = title;
        this.description = description;
        this.thumbnail = thumbnail;
    }
}
