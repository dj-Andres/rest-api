const random = () =>{
  return Math.random().toString(8).substring(2);
}

const token = () =>{
  return random() + random();
}


const tokenGenerate = token();


const generateUUID = ()  => {
  let d = new Date().getTime();
  let uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

const IdCompra = generateUUID();

console.log(IdCompra);

module.exports = {
 tokenGenerate,
 IdCompra
}
