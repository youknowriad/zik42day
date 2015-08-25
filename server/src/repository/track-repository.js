module.exports = function (Q, TrackModel) {

    return {
        create: function(track) {
            var deferred = Q.defer();
            var document = new TrackModel(track);
            document.save(function(err) {
                if (err) {
                    return deferred.reject(err);
                }
                return deferred.resolve(document);
            });

            return deferred.promise;
        },

        findAll: function(query) {
            var deferred = Q.defer();
            query = query || {};
            TrackModel.find(query, function (err, data) {
                if (err) {
                    return deferred.reject(err);
                }
                return deferred.resolve(data);
            });

            return deferred.promise;
        }
    }
};
