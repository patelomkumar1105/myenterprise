const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const Data = require("/Data/db.json");
const { callbackify } = require("util");


const app = express();
app.use(cors({ origin : "*"}));
app.use(bodyParser.json());

app.listen(3000, ()=>{
  console.log(" Port 3000 |||||||");
})

app.get("/",(res)=>
{
  res.send("<h1>Mohit Patel</h1>")
});

app.post("/sendmail",(req,res)=>
{
  console.log("request came");
  let user = req.body;
  sendMail(user,info =>{
    console.log(`The Mail has beed send and the id is ${info.messageId}`);
    res.send(info);
  });
});
// async..await is not allowed in global scope, must use a wrapper
async function sendMail(user,callback) {

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let mailOptions = {
    from: '"palpatel000000"', // sender address
    to: user.email, // list of receivers
    subject: "Hello Mohit ✔", // Subject line
    // text: "Hello world?", // plain text body
    html: `<b> ${user.name}<br>
    ${user.email}<br>
    ${user.message}<br>
     </b>`, // html body
  };
   let info = await transporter.sendMail(mailOptions);

callback(info);
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}




