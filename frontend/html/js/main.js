const contenido = document.querySelector('#usuarios')

document.addEventListener("DOMContentLoaded",function(){
    console.log("DOM fully loaded and parsed");
    getAll();
});

const getAll = async ()=>{
    try {
        let res = await fetch('http://localhost:3050/api/users'),
        data= await res.json();
        if(!res.ok) throw { status: res.status,statusText: res.statusText };
        table(data);


    } catch (err) {
        let message = err.statusText ||"Ocurrio un error";
        console.log(err);
    }
}


const table = (data) =>{
    let elementos ='';
    
    for (let item of data ){
        elementos+=`
            <div usuarioid="${item.id}" class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
                            <div class="card bg-light">
                                <div class="card-header text-muted border-bottom-0">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">
                                            Billetera electronica
                                        </font>
                                    </font>
                                </div>
                                <div class="card-body pt-1 mb-1">
                                    <div class="row">
                                        <div class="col-7">
                                            <p class="text-muted text-sm"><b>
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">Datos del Usuario:</font>
                                                    </font>
                                                </b>
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;"></font>
                                                </font>
                                            </p>
                                            <ul class="ml-4 mb-0 fa-ul text-muted">
                                                <li class="small"><span class="fa-li"><i class="fas fa-lg fa-id-card"></i></span>
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;"> Documento: ${item.documento}</font>
                                                    </font>
                                                </li>
                                                <li class="small"><span class="fa-li"><i class="fas fa-lg fa-birthday-cake"></i></span>
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;"> Nombres: ${item.nombres}</font>
                                                    </font>
                                                </li>
                                                <li class="small"><span class="fa-li"><i class="fas fa-lg fa-at"></i></span>
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;"> Correo: ${item.email}</font>
                                                    </font>
                                                </li>
                                                <li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span>
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;"> Teléfono: ${item.celular}</font>
                                                    </font>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="card-footer">
                                            <div class="text-right">
                                                <button class="subir btn btn-success ml-1" type="button" data-toggle="modal" data-target="#recarga" title="Recarga de Saldo">
                                                    <i class="fas fa-plus-circle mr-1"></i>
                                                </button>
                                                <button class="btn btn-info ml-1" type="button" data-toggle="modal" data-target="#saldo" title="Consultar Saldo">
                                                    <i class="far fa-money-bill-alt mr-1"></i>
                                                </button>
                                                <button class="btn btn-primary ml-1" type="button" data-toggle="modal" data-target="#compra" title="Verificación Compra">
                                                    <i class="fas fa-store mr-1"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
        `
    }

    contenido.innerHTML=elementos;    
}

const formulario = document.getElementById('formulario');
const mensajesFormulario = document.getElementById('mensaje');
document.addEventListener('submit', async e => {
    if (e.target === formulario) {
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:3050/add', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    documento: e.target.documento.value,
                    nombres: e.target.nombres.value,
                    email: e.target.email.value,
                    celular: e.target.celular.value
                })
            }),
                json = await res.json();
            if (!res.ok) throw { status: res.status, statusText: res.statusText };
            console.log(json);
            getAll();
        } catch (err) {
            let message = err.statusText || "Ocurrio un error";
            console.log(err);
        }
    }
});
const recarga = document.getElementById('formulario-recarga');
const mensaje_recarga=document.getElementById('mensaje_saldo');
recarga.addEventListener('submit', async e=>{
    if(e.target===recarga){
        e.preventDefault();
            try {
                let res = await fetch('http://localhost:3050/saldo',{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json; charset=utf-8"
                    },
                    body:JSON.stringify({
                        documento:e.target.documento.value,
                        celular:e.target.celular.value,
                        valor:e.target.valor.value
                    })
                }),
                json= await res.json();
                if(!res.ok) throw { status: res.status,statusText: res.statusText };
                console.log(json);
                getAll();
            } catch (err) {
                let message = err.statusText ||"Ocurrio un error";
                console.log(err);         
            }   
        //}
    } 
});

const correo=document.getElementById('formulario-compra');
correo.addEventListener('submit',async(e)=>{
    if (e.target===correo) {
        e.preventDefault();

        try {
            let res = await fetch('http://localhost:3050/compra',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json; charset=utf-8"
                },
                body:JSON.stringify({
                    email:e.target.email.value
                })
            }),
            json= await res.json();
            if(!res.ok) throw { status: res.status,statusText: res.statusText };
            console.log(json);
            getAll();
        } catch (err) {
            let message = err.statusText ||"Ocurrio un error";
            console.log(err);         
        }   
    }    
});

const saldo=document.getElementById('formulario-comsulta');
saldo.addEventListener('submit',async(e)=>{
    if (e.target===saldo) {
        e.preventDefault();

        try {
            let res = await fetch(`http://localhost:3050/recharge/${e.target.documento.value}/${e.target.celular.value}`),
            json= await res.json();
            if(!res.ok) throw { status: res.status,statusText: res.statusText };
            console.log(json);
        } catch (err) {
            let message = err.statusText ||"Ocurrio un error";
            console.log(err);         
        }   
    }    
});
