import ModalRecarga from "../modals/ModalRecarga";
import useModal from "./../hooks/useModal";

const ElementCard = ({ el,rechargeWallet }) => {
  const [isOpenModalRecarga, openModalRecarga, closeModalRecarga] = useModal();
  return (
    <tr>
      <th scope="row">{el.id}</th>
      <td>{el.documento}</td>
      <td>{el.nombres}</td>
      <td>{el.email}</td>
      <td>{el.celular}</td>
      <td>
        <button
          className="btn btn-warning"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#recarga"
          title="Recarga la Billetera"
          onClick={openModalRecarga}
          onClick={() => rechargeWallet(el)}
        >
          Recarga
        </button>
        <ModalRecarga isOpen={isOpenModalRecarga} close={closeModalRecarga} />
      </td>
    </tr>
  );
};

export default ElementCard;
