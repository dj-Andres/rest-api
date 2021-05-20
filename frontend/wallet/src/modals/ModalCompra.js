import { useState } from "react";

const initialForm = {
  email: "",
};

const ModalCompra = ({ isOpen,close, data, confirmPurchase }) => {
  const [form, setForm] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email) {
      alert("No se permiten campos vacios");
    } else {
      confirmPurchase(form);
      handleReset();
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return (
    <div
      className="modal fade"
      id="confirmar-compra"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Confirmar Compra
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
              <div className="form-control mt-2">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                  value={form.email}
                />
              </div>
              <div className="form-group mt-2 text-end">
                <button
                  type="button"
                  className="btn btn-secondary mx-2"
                  data-bs-dismiss="modal"
                  onClick={close}
                >
                  Cerrar
                </button>
                <button type="submit" className="btn btn-primary">
                  Confirmar Compra
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCompra;
