const mailer = require('mailgun-js')({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });


const sendWelcomeEmail = (email, name) => {
    mailer.messages().send({
        from: 'Mailgun Sandbox <postmaster@sandbox3c044a68c49245cd8059ebf3988c0bd9.mailgun.org>',
        to: email,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }, (error, body) => {
    });
}

const sendCancelationEmail = (email, name) => {
    mailer.messages().send({
        from: 'Mailgun Sandbox <postmaster@sandbox3c044a68c49245cd8059ebf3988c0bd9.mailgun.org>',
        to: email,
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    }, (error, body) => {
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}



