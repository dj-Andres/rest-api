const express = require('express');
const route=express.Router();
const connection = require('../database');

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

  module.exports = route;