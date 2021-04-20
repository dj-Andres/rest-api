import React, { Fragment,useState } from "react";
import ModalRecarga from "./ModalRecarga";

const ElementosCard = ({ user }) => {
  const [isOpenModalRecarga, setIsOpenModalRecarga] = useState(false);

  const openModalRecarga = () =>{
    setIsOpenModalRecarga(true);
  }

  return (
    <Fragment>
      {user.map((el) => (
        <div
          className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch"
          key={el.id}
        >
          <div className="card bg-light">
            <div className="card-header text-muted border-bottom-0">
              Información de los Usuarios
            </div>
            <div className="card-body pt-0">
              <div className="row">
                <div className="col-7">
                  <h2 className="lead">
                    <b>{el.nombres}</b>
                  </h2>
                  <ul className="ml-4 mb-0 fa-ul text-muted">
                    <li className="small pt-2">
                      <span className="fa-li">
                        <i className="fas fa-lg fa-id-card"></i>
                      </span>
                      <b>Cedula:</b> {el.documento}
                    </li>
                    <li className="small pt-2">
                      <span className="fa-li">
                        <i className="fas fa-lg fa-at"></i>
                      </span>
                      <b>Correo:</b> {el.email}
                    </li>
                    <li className="small pt-2">
                      <span className="fa-li">
                        <i className="fas fa-lg fa-phone"></i>
                      </span>
                      <b>Celular:</b> {el.celular}
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
                  onClick={openModalRecarga}
                >
                  <i className="fas fa-plus-circle mr-1"></i>
                </button>
                <ModalRecarga isOpenModalRecarga={isOpenModalRecarga} />
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
        </div>
      ))}
    </Fragment>
  );
};

export default ElementosCard;
