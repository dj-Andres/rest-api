const emailer = require("../lib/email");
const validations = require("../lib/validations");
const Wallet = require("../models/wallet");
const Wallets = {};

Wallets.newRecharge = (req, res) => {
  const { documento, celular, valor } = req.body;
  const newWallet = new Wallet({ documento, celular, valor });

  const { error } = validations.SchemaWallet.validate(req.body);

  if (error) {
    return res.status(404).json({
      error: error.details[0].message,
      message: "Fallo",
    });
  } else {
    Wallet.recharge(newWallet, (err, recharge) => {
      if (err) res.send(err);
      res.status(201).json({
        success: 1,
        message: "Exito",
        data: recharge,
      });
    });
  }
};

Wallets.check = async (req, res) => {
  const { documento, celular } = req.params;

  await Wallet.checkBalance([documento, celular], (err, saldo) => {
    if (err) throw err;

    if (saldo.length > 0) {
      res.status(200).json({
        succes: 1,
        data: saldo,
      });
    } else {
      res.status(400).json({
        succes: 0,
        message: "El documento o el celular son incorrectos",
      });
    }
  });
};

Wallets.parchace = async (req, res) => {
  const { email } = req.body;

  try {

    emailer.sendMail(email);

    await console.log(email);

    res.status(200).json({
      succes: 1,
      message:
        "Por favor revisar su bandeja de correo electronico para verificar su compra",
    });

  } catch (err) {
    console.log(err);
  }
};

module.exports = Wallets;
