const express = require('express'),
path = require('path'),
config = require('./config'),
mongoose = require('mongoose'),
setUpController = require('./controllers/setupController'),
apiController = require('./controllers/apiController');

var app = new express();
const port = process.env.PORT || 3000;

app.use('assets', express.static(path.join(__dirname, 'public')));
mongoose.connect(config.getDbConnectionString(),
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
mongoose.connection.on('connected', () => console.log("DB connected"))

//  Should be run to put seed data in DB
//  setUpController(app);

apiController(app);
app.listen(port);