var express = require('express'),
		bodyParser = require('body-parser'),
		cookieParser = require('cookie-parser'),
			app = express();

var jade = require('jade');
var i18n = require('i18n');

app.set('x-powered-by', false);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

if (process.env.NODE_ENV != 'production') {
	app.use(express.static(__dirname + '/public'));
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

app.use(function(req, res, next) {
	res.locals.locale = req.cookies.locale || 'ru';
	req.locale = req.cookies.locale || 'ru';
	next();
});

app.route('/lang/:locale').get(function(req, res) {
	res.cookie('locale', req.params.locale);
	res.redirect('back');
});

app.route('/').get(function(req, res) {
	res.render('index.jade');
});

app.route('/plan').post(function(req, res) {
	var opts = {
		compileDebug: false, debug: false, cache: false, pretty: false
	};

	try {
		res.send(jade.renderFile(__dirname + '/views/plan/' + req.body.type + '/' + req.getLocale() + '/' + req.body.item + '.jade', opts));
	} catch(e) {
		console.log('No file: ' + e.path);
	}
});


app.listen(process.env.PORT || 3000, 'localhost', function() {
	console.log('http://localhost:' + (process.env.PORT || 3000));
});