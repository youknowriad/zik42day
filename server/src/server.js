module.exports = function(express, mongoose, middlewares, controllers, config) {

    return {
        run: function() {
            var app = express();

            app.use(middlewares.bodyParser.json());
            app.use(middlewares.bodyParser.urlencoded({ extended: true }));
            app.get('/', function (req, res) {
                res.send('Zik42day Running ...');
            });
            app.post('/track', controllers.trackController.createAction);
            app.get('/track', controllers.trackController.findAllAction);
            app.get('/track/today', controllers.trackController.findForTodayAction);

            // Running
            mongoose.connect(config.db);
            app.listen(config.port);

            console.log('Zik42day running on Port %s', config.port);
        }
    }
};

