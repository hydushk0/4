var express = require('express')
	, cookieParser = require('cookie-parser')
	, bodyParser = require('body-parser')
	, session = require('cookie-session')
	, passport = require('passport')
	, request = require('request')
	, urlutils = require('url')
	, jade = require('jade')
	, stylus = require('stylus')
	, connect = require('connect')
	, assert = require('assert')
	, app = express();

var url = 'mongodb://localhost:27017/hallo';
var database = 'hallo';

//including bodyparser, cookieparser, session, passport
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

// including jade
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'jade');

// including jpg
app.use(express.static(__dirname + '/public/images'));

// including js
app.use(express.static(__dirname + '/public/javascripts'));


// including stylus
app.use(stylus.middleware({ 
  debug: true,
  src: __dirname + '/public/stylesheets/main/index.styl',
}));

app.use(stylus.middleware({ 
  debug: true,
  src: __dirname + '/public/stylesheets/crud/index.styl',
  dest: __dirname + '/public/stylesheets/crud/1.css'
}));

app.use(express.static(__dirname + '/public/stylesheets'));

var random = function(){
	return rand = Math.random();
};

app.get('/', function (req, res){
	res.render(__dirname + '/views/main');
});

app.post('/', function (req, res){
	var password = req.body.password;
	if((username === 'user') && (password === 'user')){
		funci(req, res);
		res.redirect('/auth1' + rand);

	}else{
		res.redirect('/');
	};
});

var funci = function(req, res){
	app.get('/auth1' + rand, function (req, res){
		mongo.connect(url, function(err, db){
			if (err){ throw err}
			
			db.collection(database).find().toArray(function(err, result){
				if (err){ throw	 err};
				var a = JSON.stringify(result);
				console.log(a)

				res.render(__dirname + '/views/crud', { a });
			});
		});
	});

	app.post('/auth1' + rand, function(req, res){
		
		var item = {
			pswd: req.body.pswd
		};
	
		mongo.connect(url, function(err, db){
			if (err) { throw err };

			db.collection(database).insert(item, function(err, result){
				if (err) { throw err };
				db.close();
			});
		});
	});
};

app.listen(12345);
console.log('пуск на 12345 порту');