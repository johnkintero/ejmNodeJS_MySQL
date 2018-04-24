
const dbConnection = require('../../config/dbConnection');

//module.exports = app => {
const connection = dbConnection();

exports.Glogin = function (req, res) {
  console.log('GET login.Glogin');
  res.render('vlogin');
};
exports.index = function (req, res) {
  console.log('GET login.index');
    res.redirect('/login');
};
exports.Plogin = function (req, res) {
  console.log('POST login.Plogin');
  connection.query('SELECT * FROM PERSONA where ', (err, result) => {
    console.log(result);
    res.render('vpersona', {
      vdatos: result,
    });
  });
};

//};
