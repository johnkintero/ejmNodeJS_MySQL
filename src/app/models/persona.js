const dbConnection = require('../../config/dbConnection');
const connection = dbConnection();

exports.index = function (req, res) {
  console.log('GET persona.index');
  connection.query('SELECT * FROM PERSONA', (err, result) => {
    console.log(result);
    res.render('vpersona', {
      vdatos: result,
    });
  });
};
