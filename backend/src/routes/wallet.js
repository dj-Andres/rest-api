const express = require("express");
const router = express.Router();
const Wallet = require("../controllers/wallet.controller");

router.post("/", Wallet.newRecharge);

router.get("/:documento/:celular", Wallet.check);

router.post("/buy",Wallet.parchace);

module.exports = router;


/*route.get('/verificar-pago/:id_session/:token',(req,res)=>{
    const { id_session } = req.params;
    const { token } = req.params;
});
});*/
