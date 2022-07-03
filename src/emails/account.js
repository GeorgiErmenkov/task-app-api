const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'germenkov@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the greatest Task App ever, ${name}! We hope you enjoy it!`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'germenkov@gmail.com',
        subject: 'Sorry to se you go! :(',
        text: `We are sorry to see you leave ${name}. Let us know if we can do anything to change your mind!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}