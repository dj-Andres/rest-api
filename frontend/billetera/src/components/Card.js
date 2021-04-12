import React, { Fragment, useState, useEffect } from "react";

function Elementos({ nombres, documento, celular, correo }) {
  return (
    <div className="card bg-light">
      <div className="card-header text-muted border-button-0">
        Información de los Usuarios
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-7">
            <p className="lead">
              <b>{nombres}</b>
            </p>
            <ul className="ml-4 mb-0 fa-ul text-muted">
              <li className="small pt-2">
                <span className="fa-li">
                  <i className="fas fa-lg fa-id-card"></i>
                </span>
                <b>Cedula:</b> {documento}
              </li>
              <li className="small pt-2">
                <span className="fa-li">
                  <i className="fas fa-lg fa-at"></i>
                </span>
                <b>Correo:</b> {correo}
              </li>
              <li className="small pt-2">
                <span className="fa-li">
                  <i className="fas fa-lg fa-phone"></i>
                </span>
                <b>Celular:</b> {celular}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="text-right">
          <button
            className="subir btn btn-success ml-1"
            type="button"
            data-toggle="modal"
            data-target="#recarga"
            title="Recarga de Saldo"
          >
            <i className="fas fa-plus-circle mr-1"></i>
          </button>
          <button
            className="btn btn-warning ml-1"
            type="button"
            data-toggle="modal"
            data-target="#saldo"
            title="Consultar Saldo"
          >
            <i className="far fa-money-bill-alt mr-1"></i>
          </button>
          <button
            className="btn btn-primary ml-1"
            type="button"
            data-toggle="modal"
            data-target="#compra"
            title="Verificación Compra"
          >
            <i className="fas fa-store mr-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

const Card = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUsuarios = async (url) => {
      let res = await fetch(url);

      let user = await res.json();

      user.data.forEach((element) => {
        let usuarios = {
          id: element.id,
          nombres: element.nombres,
          documento: element.documento,
          correo: element.correo,
          celular: element.celular,
        };
        setUser((user) => [...user, usuarios]);
      });
    };
    getUsuarios("http://localhost:3050/api/users");
  }, []);

  return (
    <Fragment>
      <div id="usuarios" className="row d-flex align-items-stretch">
        <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
          {user.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            user.map((el) => (
              <Elementos
                key={el.id}
                nombres={el.nombres}
                documento={el.documento}
                celular={el.celular}
                correo={el.correo}
              />
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
