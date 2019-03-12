//DECLARATION
var express  		= require('express');
var login 			= require('./controllers/login');
var home 			= require('./controllers/home');
var logout 			= require('./controllers/logout');
var signUp          =require('./controllers/signUp');
var cognitio        =require('./controllers/cognitio');
var bodyParser 		= require('body-parser');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');

var app 			= express();


//CONFIGURATION
app.set('view engine', 'ejs');


//MIDDLEWARES
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my top secret', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use('/login', login);
app.use('/signUp', signUp);
app.use('/home', home);
app.use('/logout', logout);
app.use('/ext', express.static('ext'))

//ROUTES

app.use('/',cognitio);


//SERVER STARTUP
app.listen(3000, function(){
	console.log('server started at 3000...');
});




