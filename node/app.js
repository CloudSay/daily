var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var closeRouter = require('./routes/close');
var detailRouter = require('./routes/detail');
var userRouter = require('./routes/user2');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
    "origin": ["http://localhost:8009", "http://localhost:3000", "http://localhost:8080"], //允许所有前端域名
    "credentials": true, //允许携带凭证
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
    "allowedHeaders": ['Content-Type', 'Authorization','include'] //被允许的post方式的请求头
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user', userRouter);
app.use('/close', closeRouter);
app.use('/detail', detailRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
