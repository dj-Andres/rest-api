import React, { useEffect, useState } from "react";
import ModalRegister from "../modals/ModalRegister";
import useModal from "./../hooks/useModal";
import { helpHttp } from "./../helpers/helpHttp";
import CardContend from "./CardContend";
import Loader from "./Loader";

const Contend = () => {
  const [dato, setDato] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loading, setLoading] = useState(false);

  const [isOpenModalRegister, openModalRegister, closeModalRegister] =
    useModal();

  let api = helpHttp();
  let url = "http://localhost:3050/api/users";
  let urlWallet = "http://localhost:3050/api/wallet";
  let urlSaldo = "http://localhost:3050/api/wallet";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDato(res.data);
        } else {
          setDato(null);
        }
        setLoading(false);
      });
  }, [url]);

  const getSaldo = (data) => {
    api.get(`${urlSaldo}/${data.documento}/${data.celular}`).then((res) => {
      if (!res.err) {
        setDato(res.data);
        console.log(res.data);
      } else {
        setDato("");
      }
    });
  };

  const createClient = (data) => {
    let options = {
      body: data,
      headers: { "Content-Type": "application/json" },
    };
    api.post(url, options).then((res) => {
      if (!res.err) {
        setDato([...dato, res]);
      } else {
        console.log(res);
      }
    });
  };

  const rechargeWallet = (data) => {
    let options = {
      body: data,
      headers: { "Content-Type": "application/json" },
    };
    api.post(urlWallet, options).then((res) => {
      if (!res.err) {
        setDato(res.data);
        console.log(res.data);
      } else {
        console.log(res);
      }
    });
  };

  return (
    <section>
      <div className="card pt-1 mt-1">
        <div className="card-header">
          <div className="card-title">
            <h3>
              Información de los Clientes
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#crear-usuario"
                className="btn btn-success mx-3"
                onClick={openModalRegister}
              >
                Nuevo Cliente
              </button>
            </h3>
          </div>
        </div>
        <div className="card-body">
          {loading && <Loader />}
          {dato && (
            <CardContend
              data={dato}
              rechargeWallet={rechargeWallet}
              getSaldo={getSaldo}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            />
          )}
        </div>
      </div>
      <ModalRegister
        isOpen={isOpenModalRegister}
        close={closeModalRegister}
        createClient={createClient}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
    </section>
  );
};

export default Contend;
