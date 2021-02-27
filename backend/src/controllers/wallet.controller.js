const validations = require('../lib/validations');
const Wallet = require('../models/wallet');
const Wallets ={};

Wallets.newRecharge = (req,res)=>{
    const { documento, celular, valor} = req.body;
    const newWallet = new Wallet({ documento, celular, valor });

    const { error } = validations.SchemaWallet.validate(req.body);

    if (error) {
        return res.status(404).json({
          error: error.details[0].message,
          message:"Fallo"
        });
    }else{
        Wallet.recharge(newWallet,(err, recharge) => {
            if (err) res.send(err);
            res.status(201).json({
              success: 1,
              message: "Exito",
              data: recharge
            });
        });
    }

    


}

module.exports = Wallets;
