import React from 'react';

const Mensaje = ({msg,bgColor}) =>{
    let styles = {
        padding:"1rem",
        marginBotton:"1rem",
        textAlign:"center",
        color:"#fff",
        fontWeight:"bold",
        backgroundColor:bgColor,
        borderRadius:"5px",
        textTransform:"uppercase"
    };

    return(
        <div style={styles}>
            <p style={{padding:'2px', marginLeft:'2px'}}>{msg}</p>
        </div>
    );
}

export default Mensaje;