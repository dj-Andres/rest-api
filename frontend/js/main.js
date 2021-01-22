const contenido = document.querySelector('#tabla')

document.addEventListener("DOMContentLoaded",function(){
    console.log("DOM fully loaded and parsed");
    getAll();
});

const getAll = async ()=>{
    try {
        let res = await fetch('http://localhost:3050/usuario'),
        data= await res.json();
        if(!res.ok) throw { status: res.status,statusText: res.statusText };
        console.log(data);
        table(data);

    } catch (err) {
        let message = err.statusText ||"Ocurrio un error";
        console.log(err);
    }
}


const table = (data) =>{
    let elementos ='';
    
    for (let item of data ){
        //console.log(item);
        elementos+=`
            <tr>
                <th>${item.id}</th>
                <th>${item.documento}</th>
                <th>${item.nombres}</th>
                <th>${item.email}</th>
                <th>${item.celular}</th>
            </tr>
        `
    }

    contenido.innerHTML=elementos;    
}

const formulario = document.getElementById('formulario');

document.addEventListener('submit',async e=>{
    console.log(formulario);
    if(e.target===formulario){
        e.preventDefault();
        
        try {
            let res = await fetch('http://localhost:3050/add',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json; charset=utf-8"
                },
                body:JSON.stringify({
                    documento:e.target.documento.value,
                    nombres:e.target.nombres.value,
                    email:e.target.email.value,
                    celular:e.target.celular.value
                })
            }),
            json= await res.json();
            if(!res.ok) throw { status: res.status,statusText: res.statusText };
            console.log(json);

        } catch (err) {
            let message = err.statusText ||"Ocurrio un error";
            console.log(err);         
        }
    }
});