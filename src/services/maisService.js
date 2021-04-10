const mailer = require('nodemailer');
require('dotenv').config();

module.exports = (email, nome, telefone, mensagem, anexo) => {
  const smtp = mailer.createTransport({
    host: 'smtp.live.com',
    port: 587,
    secure: false,
    auth: {
      user: 'gabirulobo@hotmail.com',
      pass: process.env.PASS
    },
  });

  const mail = {
    from: 'gabirulobo@hotmail.com',
    to: email,
    telefone: telefone,
    subject: `Email enviado por ${nome}`,
    text: mensagem
  };

  if (anexo) {
    mail.attachments = [];
    mail.attachments.push({
      filename: anexo.originalname,
      content: anexo.buffer
    });
  }

  return new Promise((resolve, reject) => {
    smtp
      .sendMail(mail)
      .then((response) => {
        console.log('email enviado');
        smtp.close();
        return resolve(response);
      })
      .catch((error) => {
        console.log('email não enviado');
        smtp.close();
        return reject(error);
      });
  });
};
