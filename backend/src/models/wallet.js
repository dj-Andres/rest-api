const sql = require("../database");

const Wallet = function (wallet) {
  this.celular = wallet.celular;
  this.documento = wallet.documento;
  this.valor = wallet.valor;
};

Wallet.checkBalance = (documento, celular, result) => {
  sql.query(
    "SELECT  valor FROM wallet WHERE documento = ? AND celular = ?",
    documento,
    celular,
    (err, res) => {
      if (err) {
        console.log("error", err);
        result(err, null);
      } else {
        console.log("data", res);
        result(null, res);
      }
    }
  );
};

Wallet.recharge = (newRecharge, result) => {
  sql.query("INSERT INTO wallet SET ?", newRecharge, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Wallet.updateStore = (id, valor, result) => {
  sql.query(
    `UPDATE wallet SET valor = valor- ${valor} WHERE id_wallet = ?`,
    id,
    (err, res) => {
      if (err) {
        console.log("error :", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Wallet;
