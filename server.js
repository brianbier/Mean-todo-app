    // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

    // Listening PORT
    var port = process.env.PORT || 8080;

    // configuration =================
    var db = require('./config/db');

    mongoose.connect(db.url);

    app.use(express.static(__dirname + '/public'));
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(bodyParser.json({type: 'application/vnd.api+json'}));
    app.use(methodOverride());

    // ROUTES 
    require('./app/routes')(app);

    // Listening port START APP
    app.listen(port);

    console.log("Todo is up and running on " + port);

    // expose app
    exports = module.exports = app;