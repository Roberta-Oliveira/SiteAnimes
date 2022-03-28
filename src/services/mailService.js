{/*const mailer = require("nodemailer");
 
module.exports = (email, nome, mensagem) => {
    const smtpTransport = mailer.createTransport({
        host: 'smtp.umbler.com',
        port: 587,
        secure: false, //SSL/TLS
        auth: {
            user: 'roberta.avelino@robertalive.com',
            pass: 'iesb123@'
        }
    })
    
    const mail = {
        from: "Roberta <'roberta.avelino@robertalive.com>",
        to: email,
        subject: `${nome} te enviou uma mensagem`,
        text: mensagem,
        //html: "<b>Opcionalmente, pode enviar como HTML</b>"
    }
    
    
    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mail)
            .then(response => {
                smtpTransport.close();
                return resolve(response);
            })
            .catch(error => {
                smtpTransport.close();
                return reject(error);
            });
    })
}*/}