const mailer = require('nodemailer');

module.exports = async (email, nome, mensagem, telefone, anexo) => {

  const testAccount = await nodemailer.createTestAccount(); 


  const smtp = mailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: testAccount.user, 
        pass: testAccount.pass, 
    },
  });

  const mail = {
    from: 'smtp.ethereal.email',
    to: 'felipe.lobo@sema.ba.gov.br',
    subject: `Email enviado por ${nome}`,
    text: mensagem,
    telefone: telefone
  };

  if (anexo) {
    mail.attachments = [];
    mail.attachments.push({
      filename: anexo.originalname,
      content: anexo.buffer,
    });
  }

  return new Promise((resolve, reject) => {
    smtp
      .sendMail(mail)
      .then((response) => {
        smtp.close();
        return resolve(response);
      })
      .catch((error) => {
        smtp.close();
        return reject(error);
      });
  });
};
