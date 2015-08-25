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
        },

        findForToday: function() {
            var deferred = Q.defer();
            var start = new Date();
            start.setHours(0, 0, 0, 0);
            var end = new Date();
            end.setHours(23,59,59,99);
            TrackModel.findOne({ date: {"$gte": start, "$lt": end}}, function (err, document) {
                if (err) {
                    return deferred.reject(err);
                }
                deferred.resolve(document);
            });

            return deferred.promise;
        }
    }
};
