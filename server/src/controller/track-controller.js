module.exports = function(trackRepository) {

    return {
        createAction: function(req, res) {
            return trackRepository.create(req.body)
                .then(function(document) {
                    return res.send(document);
                })
                .catch(function(error) {
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
        }
    }
};
