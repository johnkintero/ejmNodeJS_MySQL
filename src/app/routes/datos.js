const dbConnection = require('../../config/dbConnection');

module.exports = app => {
  const connection = dbConnection();

  app.get('/', (req, res) => {
    console.log('estoy en datos');
    connection.query('SELECT * FROM PERSONA', (err, result) => {
      console.log(result);
      res.render('vdatos', {
        vdatos: result,
      });
    });
  });

  app.post('/datos', (req, res) => {
    console.log(req.body);
    const {
      id,
      numerodocumento,
      nombre,
      apellido,
      activo,
      fechaCreacion,
    } = req.body;
    connection.query('INSERT INTO PERSONA SET?', {

      STRNUMERODOCUMENTO: numerodocumento,
      STRNOMBRE: nombre,
      STRAPELLIDO: apellido,
      BITACTIVO: activo,
    }, (err, result) => {
      console.log(result);
      res.redirect('/');
    });
  });
};
