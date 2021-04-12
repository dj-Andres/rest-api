/*const getUser = async () => {
  const url = "http://localhost:3050/api/users";
  const res = await fetch(url);

  if (!res.ok) {
    const { url, status, statusText } = res;
    throw Error(`Error:${status} ${statusText} in fetch ${url}`);
  }

  const user = await res.json();

  user.data.forEach(element => {
      let usuarios ={
          id:element.id,
          nombres:element.nombres,
          documento:element.documento,
          correo:element.correo,
          celular:element.celular
      }
      console.log(usuarios);
  });
  
};

export default getUser;*/
