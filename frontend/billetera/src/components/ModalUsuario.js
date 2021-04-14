import React, { useState } from "react";
import Swal from "sweetalert2";

const initialForm = {
  documento: "",
  nombres: "",
  celular: "",
  email: "",
};

const ModalUsuario = ({ isOpen }) => {
  const url = "http://localhost:3050/api/users";

  const [form, setForm] = useState(initialForm);

  const hundleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const hundleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nombres || !form.documento || form.email || !form.celular) {
      Swal.fire("Oops...", "Debe estar todos los campos llenos", "error");
    } else {
      try {
        let res = fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
              documento: form.documento,
              nombres: form.nombres,
              email: form.email,
              celular: form.celular,
            }),
          }),
          json = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        console.log(json);
      } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        console.log(err);
      }
      hundleReset();
    }
  };

  const hundleReset = (e) => {
    setForm(initialForm);
  };

  return (
    <div
      className="modal fade"
      id="crear-usuario"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="card card-success">
            <div className="card-header">
              <h3 className="card-title">Crear Usuario</h3>
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
                  <label htmlFor="documento">Documento</label>
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
                  <label htmlFor="nombres">Nombres</label>
                  <input
                    type="text"
                    name="nombres"
                    className="form-control"
                    onChange={hundleChange}
                    value={form.nombres}
                    placeholder="Nombres"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={hundleChange}
                    value={form.email}
                    placeholder="Email"
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
              </form>
              <div className="card-footer">
                <button
                  className="btn btn-primary float-rigth m-1"
                  type="submit"
                  name="Guardar"
                  id="guardar"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUsuario;
