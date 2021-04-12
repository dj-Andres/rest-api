import React, { Fragment } from "react";
import Card from "./Card";


const Contend = () => {
  return (
    <Fragment>
      <section>
        <div className="container-fluid px-3 py-3 pt-md-5 pb-md-4 my-4 mx-auto">
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">Información de Usuarios</h3>
              <div className="input-group">
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#crear-usuario"
                  className="btn btn-block btn-success ml-2 py-2 mt-2"
                >
                  Crear Usuario
                </button>
              </div>
            </div>
            <div className="card-body">
               <Card />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contend;
