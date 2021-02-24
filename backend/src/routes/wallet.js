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
  /*const token_compra = token();
  const id_session = Id();*/

  const contenido = `
        <h1>Verificación de Pago</h1>
        <ul>
          <li>Valor de la Compra es: </li>
        </ul>
      `;

  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.CLAVE,
    }
  });

  const info =  transporter.sendMail({
    from: "'Pagos Online'<diegoandresjimenezponce96jp@gmail.com>",
    to: email,
    subject: "Verificación de Pago",
    html: contenido
  });
  console.log('Correo enviado',info.messageId);
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