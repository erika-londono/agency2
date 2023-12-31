import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const transporter = {
  auth: {
    api_key:  process.env.SENDGRID_API_KEY,
  },
};

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
  console.log(req.body);
  const { name, email, number, subject, text } = req.body;

  const data = {
    to: "pablocaicedo@cjsports.co",
    from: "erikam.londonoc@gmail.com",
    subject: `${subject} customer from CJ sports`,
    text: text,
    html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${text} 
            <b>email:</b> ${email} 
        `,
  };
  try {
    const response = await mailer.sendMail(data);
    console.log(response);
    res.status(200).send("Message sent");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error sending");
  }
};
