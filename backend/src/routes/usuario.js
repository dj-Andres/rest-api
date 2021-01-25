const express = require('express');
const route=express.Router();
const connection = require('../database');
const nodemailer=require('nodemailer');


//funciones//
function random(){
  return Math.random().toString(10).substring(2);
}
const token = function token(){
  return random() + random();
}
const Id=function generateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}
// Route
route.get('/', (req, res) => {
    res.send('Welcome to my API!');
  });
  
  // all customers
  route.get('/usuario', (req, res) => {
    const sql = 'SELECT * FROM usuario';
  
    connection.query(sql, (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        res.json(results);
      } else {
        res.send('Not result');
      }
    });
  });
  
  route.get('/usuario/:id', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM usuario WHERE id = ${id}`;
    connection.query(sql, (error, result) => {
      if (error) throw error;
  
      if (result.length > 0) {
        res.json(result);
      } else {
        res.send('Not result');
      }
    });
  });
  route.post('/add', (req, res) => {
    const sql = 'INSERT INTO usuario SET ?';
    const customerObj = {
      documento: req.body.documento,
      nombres: req.body.nombres,
      email: req.body.email,
      celular: req.body.celular,
    };
    
    connection.query(sql, customerObj, error => {
      if (error) throw error;
      res.send('Customer created!');
    });
    
  });
  route.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { documento, nombres, email, celular } = req.body;
    const sql = `UPDATE usuario SET ducumento = '${documento}', nombres='${nombres}',email='${email}',celular='${celular}' WHERE id =${id}`;
  
    connection.query(sql, error => {
      if (error) throw error;
      res.send('Customer updated!');
    });
  });
  
  route.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM usuario WHERE id= ${id}`;
  
    connection.query(sql, error => {
      if (error) throw error;
      res.send('Delete customer');
    });
  });

  //Wallet//
  route.post('/recharge',(req,res)=>{
    const sql = 'INSERT INTO wallet SET ?';
    const walletObj = {
      documento: req.body.documento,
      celular: req.body.celular,
      valor:req.body.valor
    };
    connection.query(sql,walletObj,(err,rows,fields)=>{
        if(!err){
          res.json({
            message:"exito"
          })
        }else{
          console.log(err);
        }
    });
  });
  
route.post('/compra',(req, res) => {
  const { email } = req.body;
  const token_compra = token();
  const id_session = Id();

  const contenido = `
        <h1>Verificación de Pago</h1>
        <ul>
          <li>Valor de la Compra es: $</li>
          <li>Token de Compra: ${token_compra}</li>
          <p>El id de la compra es : ${id_session}</p>
          <p>El token es  : ${token_compra}</p>
          <a href="http://localhost/verificar-pago/:${id_session}/${token_compra}">Confirmar Pago</a>
        </ul>
      `;

  const transporter = nodemailer.createTransport({
    host: 'smtp.google.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.CLAVE,
    }
  });

  const info = transporter.sendMail({
    from: "'Pagos Online'<diegoandresjimenezponce96jp@gmail.com>",
    to: email,
    subject: "Verificación de Pago",
    html: contenido
  });
  console.log('Correo enviado');
  res.send('Send Email');

});
route.get('/verificar-pago/:id_session/:token',(req,res)=>{
    const { id_session } = req.params;
    const { token } = req.params;
});
route.get('/saldo/:documento/:celular',(req,res)=>{
  const { documento , celular } = req.params;
  const sql =`SELECT valor FROM wallet WHERE documento = ${documento} AND celular =${celular}`;
  connection.query(sql,(error,result)=>{
    if (error) throw error;
    if(result.length > 0){
      res.json(result);
    } else {
      res.send('Not result');
    }
  });

});
module.exports = route;