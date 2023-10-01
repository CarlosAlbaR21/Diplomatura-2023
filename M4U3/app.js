var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// tarea a entregar --------------------------------

var contactoRouter = require("./routes/contacto");
var destacadosRouter = require("./routes/destacados");
var nosotrosRouter = require("./routes/nosotros");


// fin arriba
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//-------------------------------------------

// llamado metodo- controlador
// ruta 1 tarea 
app.use("/contacto", contactoRouter);
// ruta 2 tarea 
app.use("/destacados", destacadosRouter);
// ruta 3 tarea 
app.use("/nosotros", nosotrosRouter);

//------------------------------------------------


// clase prueba 
app.get("/prueba", function(req, res){
  res.send('Hola soy la pagina de prueba');
})








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
