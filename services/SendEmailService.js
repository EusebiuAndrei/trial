const nodemailer = require('nodemailer');
const Logger = require('../loaders/logger');

class SendEmailService {
    constructor(){

    }
    async sendEmail(emailToken,email){
        
        var auth = {
            type: 'oauth2',
            user: 'cozmacatalin33@gmail.com',
            clientId: '240398453424-pgn2b6upbtqpqgas47t55aai542bmtd9.apps.googleusercontent.com',
            clientSecret: 'Jxf8WeNko0wF6rsyaMhXAgf_',
            refreshToken: '1//043ZcOJBeGmA8CgYIARAAGAQSNwF-L9Ir4slKlYxHG7kVguqExt96ocoi1hURMiTmuX9FoTLP2bZWXI6HCvdidwGIsdMpHfV4OAk',
            accessToken: 'ya29.a0Ae4lvC1Ryh5qU_QKsDQOk8s-00t93hz3rkClPCn8SD6YD-rREs11WDigY5iLvaSH5_eDSLhxuaXrxQ4MHri0omr6A4aXeT1_-PyeQ2EAQxnCJ0r99DPephKqfGATmCkvs8PD27CYaK9zwjzz6f22Sl6uq7FECsxp0XM',
            authorizationCode: '4/ygFLyP_iRXCIq51eFnkFJvpDcIU0E-LOO4-0MdBNN2YRylvKPXz0Y7139D8YC9EZJk7-9sOKUCD801emVjRRUrE'
        };

        var mailOptions = {
            from: 'cozmacatalin33@gmail.com',
            to: email,
            subject: 'Salutare din partea echipei accounts',
            html: '<h1>Confirmare email</h1> </br> <p>Pentru a confirma email-ul te rog apasa aici</p> </br> 127.0.0.1:3000/api/users/confirm'+ emailToken
        };

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: auth,
        });

        transporter.sendMail(mailOptions, (err, res) => {
            if (err) {
                return console.log(err);
               //return console.log("n-am reusit");
            } else {
                console.log(JSON.stringify(res));
                //return console.log("am reusit");
            }
        });

    }
}

module.exports = SendEmailService;
