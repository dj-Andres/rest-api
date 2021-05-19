import ModalRecarga from "../modals/ModalRecarga";
import ModalSaldo from "../modals/ModalSaldo";
import useModal from "./../hooks/useModal";

const ElementCard = ({ el, rechargeWallet,getSaldo }) => {
  const [isOpenModalRecarga, openModalRecarga, closeModalRecarga] = useModal();
  const [isOpenModalSaldo, openModalSaldo, closeModalSaldo] = useModal();
  return (
    <tr>
      <th scope="row">{el.id}</th>
      <td>{el.documento}</td>
      <td>{el.nombres}</td>
      <td>{el.email}</td>
      <td>{el.celular}</td>
      <td style = {{width:'10px'}}>
        <button
          className="btn btn-warning"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#recarga"
          title="Recarga la Billetera"
          onClick={openModalRecarga}
        >
          Recarga
        </button>
        <ModalRecarga
          data={el}
          rechargeWallet={rechargeWallet}
          isOpen={isOpenModalRecarga}
          close={closeModalRecarga}
        />
      </td>
      <td style = {{width:'10px'}}>
        <button
          className="btn btn-warning"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#consultar-saldo"
          title="Consultar Saldo"
          onClick={openModalSaldo}
        >
          Saldo
        </button>
        <ModalSaldo
          data={el}
          getSaldo={getSaldo}
          isOpen={isOpenModalSaldo}
          close={closeModalSaldo}
        />
      </td>
    </tr>
  );
};

export default ElementCard; 
