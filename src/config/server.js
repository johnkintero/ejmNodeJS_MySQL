const express = require('express');
const path  = require('path');
const bodyParser = require('body-parser');
var http = require('http');
var debug = require('debug')('data:server');
var routes = require('../app/routes/index');

//var session = require('express-session');
//var cookieParser = require('cookie-parser');

const app = express();

//settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));//aqui se le dice donde buscar las vistas
app.set('port', process.env.PORT || 3000);
var servidor = http.createServer(app);
servidor.on('error', onError);
servidor.on('listening', onListening);

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// include routes
app.use('/', routes);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = servidor.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

module.exports = app;
