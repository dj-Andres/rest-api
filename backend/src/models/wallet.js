const sql = require ('../database');

const Wallet= function(wallet){
    this.celular=wallet.celular;
    this.documento=wallet.documento;
    this.valor=wallet.valor;
}

Wallet.checkBalance=(documento,celular,result)=>{
    sql.query("SELECT  valor FROM wallet WHERE documento = ? AND celular = ?",documento,celular,(err,res)=>{
        if(err){
            console.log("error",err);
            result(err,null);
        }else{
            console.log("data",res);
            result(null,res);
        }
    });
}

Wallet.recharge = (newRecharge,result) =>{
    sql.query("INSERT INTO wallet SET ?",newRecharge,(err,res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
}

Wallet.validate=(documento,email,result)=>{
    sql.query("SELECT documento,email FROM usuario WHERE documento = ? OR email = ? ",documento,email,(err,res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null,res);
        }
    });
};

Wallet.update =(id,Wallet,result)=>{
    sql.query("UPDATE usuario SET documento = ? , nombres = ? , email = ? , celular = ?  WHERE id = ?",[Wallet.documento,Wallet.nombres,Wallet.email,Wallet.celular,id],(err,res)=>{
        if(err){
            console.log("error :" ,err);
            result(null,err);
        }else{
            result(null,res);
        }
    });
}

Wallet.remove = (id,result) =>{
    sql.query(`DELETE FROM usuario WHERE id = ${id}`,(err,res)=>{
        if(err){
            console.log("error :" ,err);
            result(null,err);
        }else{
            result(null, res);
        }
    });
}

module.exports = Wallet;