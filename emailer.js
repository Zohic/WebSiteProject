const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "forsteamz@mail.ru", // generated ethereal user
        pass: "RCi1aTun4fD7LXDVH6q1" // generated ethereal password
        }
    }, {
        from: "Авто сервис <forsteamz@mail.ru>"
       }
);

function sendMail(address, linkOk, linkNot) {
    transporter.sendMail({
        to: address,
        subject: "Подтвердите заказ",
        text: "с вас пять тыщ",
        html: "<a href='" + linkOk + "'>Подтвердить заказ</a><br><a href='" + linkNot + "'>Отменить заказ</a>"
        
    }, function (err, info) {
            if (err) return console.log(err);
            else console.log("sent " + info);
    });
}



module.exports = sendMail;

