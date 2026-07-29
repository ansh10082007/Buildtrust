const transporter = require("../config/mail");

const sendVerificationEmail = async (email, token) => {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Email verification",
        html: `
            <h2>Verify your email</h2>
            <p>Click the button below to verify your account.</p>

            <a href="<a href="${process.env.BACKEND_URL}/users/verify/${token}">">
                Verify Email
            </a>
        `
    })
}

module.exports = sendVerificationEmail;

