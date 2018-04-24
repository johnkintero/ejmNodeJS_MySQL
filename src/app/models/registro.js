const dbConnection = require('../../config/dbConnection');
const connection = dbConnection();
//module.exports = () => {
/*
function add(req, res) {
  const connection = dbConnection();

  function guardarDatos() {
    console.log('entro al post');
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
  };
};
*/
exports.index = function (req, res) {
  console.log('GET registro.index');
  res.render('vregistro');
};

exports.Pregistro = function (req, res){
  console.log('POST registro.Pregistro');
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
};


//};
/**
function guardarDatos() {
  console.log('entro al post');
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
};*/
