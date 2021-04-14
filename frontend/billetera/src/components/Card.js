import React, { Fragment, useState, useEffect } from "react";
import ElementosCard from "./ElementosCard";
import Loader from "./Loader";

const Card = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUsuarios = async (url) => {
      let res = await fetch(url);

      let user = await res.json();

      user.data.forEach((element) => {
        let usuarios = {
          id: element.id,
          nombres: element.nombres,
          documento: element.documento,
          email: element.email,
          celular: element.celular,
        };
        setUser((user) => [...user, usuarios]);
      });
    };
    getUsuarios("http://localhost:3050/api/users");
  }, []);

  return (
    <Fragment>
      <div className="row d-flex align-items-stretch">
        {user.length === 0 ? (
          <Loader />
        ) : (
          <ElementosCard user={user} />
        )}
      </div>
    </Fragment>
  );
};

export default Card;
