const express = require("express");
const router = express.Router();
const Wallet = require("../controllers/wallet.controller");

router.post("/", Wallet.newRecharge);

router.get("/:documento/:celular", Wallet.check);

router.post("/buy", Wallet.parchace);

router.get("conformarPago/:sessionCompra", Wallet.confirmeBuy);

module.exports = router;
