import React, { useState } from "react";
import Swal from "sweetalert2";
import { helpHttp } from "./../helpers/helpHttp";

const initialForm = {
  documento: "",
  celular: "",
  saldo: "",
};

const ModalRecarga = ({ isOpenModalRecarga }) => {
  const [form, setForm] = useState(initialForm);
  let api = helpHttp();
  let url = "http://localhost:3050/api/wallet";

  const hundleSubmit = (e) => {
    e.preventDefault();
    if (!form.documento || !form.celular || !form.saldo) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Se debe llenar todos los campos",
      });
    } else {
      newRecharge();
    }
  };

  const newRecharge = async () => {
    let options = {
      body: {
        documento: form.documento,
        celular: form.celular,
        valor: form.saldo,
      },
      headers: { "Content-Type": "application/json" },
    };

    await api.post(url, options).then((res) => {
      if (!res.err) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${res.message}`,
          showConfirmButton: false,
          timer: 3500,
        });
        hundleReset();
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Error ${res.statusText}`,
          showConfirmButton: false,
          timer: 3500,
        });
      }
    });
  };

  const hundleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const hundleReset = () => {
    setForm(initialForm);
  };

  return (
    <div
      className="modal fade"
      id="recarga"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="card card-success">
            <div className="card-header">
              <h3 className="card-title">Recargar Saldo</h3>
              <button className="close" data-dismiss="modal" aria-label="close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="card-body">
              <div
                className="alert alert-success text-center"
                id="crear"
                style={{ display: "none" }}
              >
                <span>
                  <i className="fas fa-check m-1"></i>Se creo exitosamento el
                  usuario
                </span>
              </div>
              <div
                className="alert alert-danger text-center"
                id="mensaje"
                style={{ display: "none" }}
              >
                <span>
                  <i className="fas fa-times m-1"></i>Llenar todos los campos
                  requeridos por favor !!
                </span>
              </div>

              <form onSubmit={hundleSubmit}>
                <div className="form-group">
                  <label htmlFor="documento" className="text-right">
                    Documento
                  </label>
                  <input
                    type="text"
                    name="documento"
                    className="form-control"
                    onChange={hundleChange}
                    value={form.documento}
                    placeholder="Documento"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="saldo">Valor de Recarga</label>
                  <input
                    type="number"
                    name="saldo"
                    className="form-control"
                    onChange={hundleChange}
                    value={form.saldo}
                    placeholder="Valor de Recarga"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="celular">Celular</label>
                  <input
                    type="text"
                    name="celular"
                    className="form-control"
                    onChange={hundleChange}
                    value={form.celular}
                    placeholder="Celular"
                  />
                </div>
                <button
                  className="btn btn-primary float-rigth m-1"
                  type="submit"
                >
                  Guardar
                </button>
                <button
                  className="btn btn-success float-rigth m-1"
                  type="button"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRecarga;
