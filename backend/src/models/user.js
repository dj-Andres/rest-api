const sql = require ('../database');

const User= function(user){
    this.documento=user.documento;
    this.nombres=user.nombres;
    this.email=user.email;
    this.celular=user.celular;
}

User.getAllUsers=(result)=>{
    sql.query("SELECT * FROM usuario",(err,res)=>{
        if(err){
            console.log("error",err);
            result(err,null);
        }else{
            console.log("data",res);
            result(null,res);
        }
    });
}

User.getUserbyId= (userId,result)=>{
    sql.query("SELECT * FROM usuario WHERE id = ?",userId,(err,res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null,res);
        }
    });
}

User.createUser = (newUser,result) =>{
    sql.query("INSERT INTO usuario SET ?",newUser,(err,res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
}

User.validate=(documento,email,result)=>{
    sql.query("SELECT documento,email FROM usuario WHERE documento = ? OR email = ? ",documento,email,(err,res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null,res);
        }
    });
};

User.update =(id,user,result)=>{
    sql.query("UPDATE usuario SET documento = ? , nombres = ? , email = ? , celular = ?  WHERE id = ?",[user.documento,user.nombres,user.email,user.celular,id],(err,res)=>{
        if(err){
            console.log("error :" ,err);
            result(null,err);
        }else{
            result(null,res);
        }
    });
}

User.remove = (id,result) =>{
    sql.query(`DELETE FROM usuario WHERE id = ${id}`,(err,res)=>{
        if(err){
            console.log("error :" ,err);
            result(null,err);
        }else{
            result(null, res);
        }
    });
}

module.exports = User;