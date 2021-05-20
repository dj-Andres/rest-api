const nodemailer = require("nodemailer");
const { tokenGenerate, IdCompra } = require("../lib/funcions");

const tokenCompra = tokenGenerate;

const sessionCompra = IdCompra;

const contenido = `
        <h1>Verificación de Pago</h1>
        <ul>
          <li>Valor de la Compra es: </li>
        </ul>
        <a href="http://localhost:3050/api/wallet/confirmarPago/${sessionCompra}">Verificar Compra</a>
        <p>Su token de Validación de la compra es la siguiente : ${tokenCompra}</p>
      `;

const createTransport = () => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.CLAVE,
    },
  });
  return transport;
};

const sendMail = async (email) => {
  const transporter = createTransport();
  const info = await transporter.sendMail({
    from: "Pagos Online <andres96jimenez@gmail.com>",
    to: `${email}`,
    subject: "Confirmar Compra",
    html: contenido,
  });
  console.log("Mensaje enviado correctamente: %s", info.messageId);
  return;
};

exports.sendMail = (email) =>
  sendMail(email);
