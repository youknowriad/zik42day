module.exports = function (mongoose) {

    var TrackSchema = new mongoose.Schema({
        title: String,
        description: String,
        soundcloudUrl: String,
        soundcloudId: Number,
        spotifyId: String,
        date: { type: Date, default: Date.now }
    });

    return mongoose.model('track', TrackSchema);
};
