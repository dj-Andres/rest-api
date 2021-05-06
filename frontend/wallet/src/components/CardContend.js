import ElementCard from "./ElementCard";
const CardContend = ({ data,rechargeWallet }) => {
  return (
    <div  className="table-responsive">
      <table class="table table-striped table-sm">
        <thead>
          <tr className="table-primary">
            <th scope="col">Codigo</th>
            <th scope="col">Documento</th>
            <th scope="col">Nombres</th>
            <th scope="col">Correo</th>
            <th scope="col">Celular</th>
            <th scope="col">Optciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <ElementCard
                key={el.id}
                el={el}
                rechargeWallet={rechargeWallet}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CardContend;
