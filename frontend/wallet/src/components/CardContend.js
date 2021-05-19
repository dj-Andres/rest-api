import ElementCard from "./ElementCard";
const CardContend = ({
  data,
  rechargeWallet,
  getSaldo,
  dataToEdit,
  setDataToEdit
}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-hover table-striped table-sm">
            <thead>
              <tr className="table-primary">
                <th>Codigo</th>
                <th>Documento</th>
                <th>Nombres</th>
                <th>Correo</th>
                <th>Celular</th>
                <th colSpan="3">Optciones</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((el) => (
                  <ElementCard
                    key={el.id}
                    el={el}
                    rechargeWallet={rechargeWallet}
                    getSaldo={getSaldo}
                    dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="6">Sin datos</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardContend;
