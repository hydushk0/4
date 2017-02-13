// var express = require('express');
// var passport = require('passport');

// var LocalStrategy = require('passport-local').Strategy;
// passport.use(new LocalStrategy(
// 	function(username, password, done){
// 		if (username != 'user')
// 			return done(null, false, {message: 'Неверный логин'});

// 		if (password != 'user')
// 			return done(null, false, {message: 'Неверный пароль'});

// 		return done(null, {username: 'admin'});
// 	}
// ));

// passport.serializeUser(function(user, done){
// 	done(null, user.username);
// });

// passport.deserializeUser(function(id, done){
// 	done(null, {username: id});

// });
