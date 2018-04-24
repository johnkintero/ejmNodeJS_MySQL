const app = require('./config/server');
var express = require('express');
var routes = require('./app/routes/index');

//starting the server
app.listen(app.get('port'), () => {
  console.log('server on port ', app.get('port'));
});
/*
  app.use(function (req, res, next) {
      console.log('WTF');
    if (req.url != '/login') { // && req.session.user === undefined) {
      res.redirect('/login');
      return;
    }

    next();
  });
*/

//app.use('/', routes);
/*
app.use(function (req, res, next) {
    if (req.url != '/login') {
        res.redirect('/login');
        return;
    }
    next();
}), (err, result) => {
  console.log(result);
  res.redirect('/');
};
*/

/*
app.get('/', function (req, res) {
  console.log('get login');
  res.render('vlogin');
});
/*
app.get('/registro', function (req, res) {
  console.log('get registro');
  res.render('vregistro');
});

app.post('/registro', (req, res) => {
  console.log('post registro');
  var registro = regis.guardarDatos();
}), (err, result) => {
  console.log(result);
  res.redirect('/');
};*/
