var express = require('express'),
		bodyParser = require('body-parser'),
		cookieParser = require('cookie-parser'),
		session = require('express-session'),
			app = express();

var i18n = require('i18n');

app.set('x-powered-by', false);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));  // remove
if (process.env.NODE_ENV != 'production') {
	// app.use(express.static(__app_root + '/public'));
	app.locals.pretty = true;
	app.set('json spaces', 2);
}

i18n.configure({
	locales: ['ru', 'en'],
	defaultLocale: 'ru',
	cookie: 'locale',
	directory: __dirname + '/locales'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(i18n.init);

app.use(session({
	key: 'session',
	rolling: true,
	resave: false,
	saveUninitialized: false,
	secret: 'keyboard cat',
	cookie: {
		path: '/',
		maxAge: 1000 * 60 * 60 * 2 // 2 hours
	}
}));


app.route('/').get(function(req, res) {
	res.render('index.jade');
});


app.listen(process.env.PORT || 3000);
console.log('http://127.0.0.1:3000');