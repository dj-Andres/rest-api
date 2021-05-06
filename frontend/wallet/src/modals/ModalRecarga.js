import { useState } from "react";

const InitialForm = {
    documento: "",
    celular: "",
    saldo: "",
};

const ModalRecarga = ({ isOpen, close }) => {
  const [form, setForm] = useState(InitialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.documento || !form.celular || !form.saldo) {
      alert("No se permite datos vacios");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = (e) =>{
    setForm(InitialForm);
  }

  return (
    <div
      className="modal fade"
      id="recarga"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Recarga de la Billetera
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label htmlFor="documento" className="form-label">
                  Documento
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="documento"
                  onChange={handleChange}
                  value={form.documento}
                />
              </div>
              <div className="form-control mt-2">
                <label htmlFor="celular" className="form-label">
                  Celular
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="celular"
                  onChange={handleChange}
                  value={form.celular}
                />
              </div>
              <div className="form-control mt-2">
                <label htmlFor="celular" className="form-label">
                  Saldo
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="saldo"
                  onChange={handleChange}
                  value={form.saldo}
                />
              </div>
              <div className="form-group mt-2 text-end">
                <button
                  type="button"
                  className="btn btn-secondary mx-2"
                  data-bs-dismiss="modal"
                  onClick={close}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRecarga;
