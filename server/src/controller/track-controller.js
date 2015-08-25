module.exports = function(trackRepository) {

    return {
        createAction: function(req, res) {
            return trackRepository.findForToday().then(function(track) {
                if (!track) {
                    return trackRepository.create(req.body)
                        .then(function(document) {
                            return res.send(document);
                        });
                } else {
                    return res.status(400).send({ status: 'error', message: 'there\'s already a track for today'});
                }
}           ).catch(function(error) {
                return res.status(500).send({ status: 'error', message : 'insert error' });
            });
        },

        findAllAction: function(req, res) {
            return trackRepository.findAll(req.query)
                .then(function(documents) {
                    return res.send(documents);
                })
                .catch(function(error) {
                    return res.status(500).send({ status: 'error', message : 'fetch error' });
                });
        },

        findForTodayAction: function(req, res) {
            return trackRepository.findForToday().then(function(track) {
                return res.send(track);
            }).catch(function(error) {
                return res.status(500).send({ status: 'error', message : 'insert error' });
            });
        }
    }
};
