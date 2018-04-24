var express = require('express');
//var app = express();
var router = express.Router();
var login = require('../models/login');
var register = require('../models/registro');
var person = require('../models/persona');

//app.use('./app/models', router);

/* login */

router.get('/', login.index);
router.get('/login', login.Glogin);
//router.get('/login', login.Glogin);

//router.post('/login', login.Plogin);
router.get('/registro', register.index);
router.post('/registro', register.Pregistro);

router.get('/persona', person.index);

module.exports = router;
