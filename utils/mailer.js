import dotenv from 'dotenv'
dotenv.config({
    path:"./.env"
})
import nodemailer from 'nodemailer'


const sendMail = async (to , subject , text)=>{

    
    try{

        const transporter = await nodemailer.createTransport({
 
            host:process.env.MAILTRAP_SMTP_HOST,
            port : process.env.MAILTRAP_SMTP_PORT,
            secure:false,
            auth:{
                user:process.env.MAILTRAP_SMTP_USER,
                pass:process.env.MAILTRAP_SMTP_PASSWORD
            }
        })


         const info = await transporter.sendMail({
 
            // host:process.env.MAILTRAP_SMTP_HOST,
            // port : process.env.MAILTRAP_SMTP_PORT,
            // secure:false,
            // auth:{
            //     user:process.env.MAILTRAP_SMTP_USER,
            //     pass:process.env.MAILTRAP_SMTP_PASSWORD
            // }


            from:"Inngest TMS",
            to,
            subject,
            text 
        })
        return info;

    }
    catch(error){
        console.log("X--Mail error ", error.message)
        throw error;
    }

}
export default sendMail;