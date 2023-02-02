const httpStatus = require("http-status");
var jwt = require("jsonwebtoken");
const UserRepository = require("../repos/UserRepository");
const ApiError = require("../utils/ApiError");
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');
// const ApiError = require("../utils/ApiError");

const check = async(password,secondValue)=>{
    const result = await bcrypt.comapre(password,secondValue);
    
    if(!result){
        throw new ApiError(httpStatus.NOT_FOUND,"Invalid cewdential")
    }
    return result
};

// all the logic part we write here
const SignUpProcess = async (fullname, username, emailid, phnumber, DOB, country, state, city, pincode, password) => {
    const hash = await bcrypt.hash(password, 10);
    const message = await UserRepository.SignUp(fullname, username, emailid, phnumber, DOB, country, state, city, pincode, hash);
    if(message){
        console.log("Data not added")
    }else{
        console.log("Data added successfully")
    }
};

const SignInProcess = async (username, password) => {
    const data = await UserRepository.SignIn(username, password);
    if (!data) {
        // throw new ApiError(httpStatus.NOT_FOUND, "Invalid credential");
        console.log("Invalid credential");
    }
    const result = await bcrypt.compare(password, data.dataValues.password);
    if (!result) {
        // throw new ApiError(httpStatus.NOT_FOUND, "Invalid credential");
        console.log("Invalid password");
    } else {
        let params = {
            id: data.dataValues.id,
            username: data.dataValues.username,
            twoFactorEnabled: data.dataValues.enabled2FA,
        }
        return jwt.sign(params, process.env.PRIVATE_KEY, {
            expiresIn: "30m"
        });
    }
};

const verifyTwoFAProcess = async (username, password) => {
    const data = await UserRepository.SignIn(username, password);
    if (!data) {
        throw new ApiError(httpStatus.NOT_FOUND, "Invalid credential");
    }
    const result = await bcrypt.compare(password, data.password);
    if (!result) {
        throw new ApiError(httpStatus.NOT_FOUND, "Invalid credential");
    }
    let params = {
        id: data.dataValues.id,
        username: data.dataValues.username,
        twoFactorEnabled: data.dataValues.enabled2FA,
    }
    return jwt.sign(params, process.env.PRIVATE_KEY, {
        expiresIn: "24h"
    });
};

// const SignInProcess = async (username, password) => {
//     let token;
//     const data = await UserRepository.SignIn(username);
//     if (data.user != null) {
//         const result = await bcrypt.compare(password,data.user.password);
//         let user = {};
//         user.userId = data.user.user_id
//         user.name
//         return jwt.sign(data.dataValues, process.env.PRIVATE_KEY, {
//             expiresIn: "5m"
//         });
//     }
//     return false
// };

const UpProfProcess = async (fullname, emailid, phnumber, DOB, country, state, city, pincode) => {
    const message = await UserRepository.UpdProf(fullname, emailid, phnumber, DOB, country, state, city, pincode);
    if(message){
        console.log("Data not added")
    }else{
        console.log("Data updated successfully")
    }
    // return message;
};

const UpProfPic = async (username, file) => {
    const message = await UserRepository.UpdProfPIC(username, file);
    if(file == undefined){
        console.log("You must select a file.")
    }else{
        console.log("Data updated successfully")
    }
    // return message;
};

const DelProfProcess = async (param) => {
    const message = await UserRepository.DelProf(param);
    if(message){
        console.log("Data not added")
    }else{
        console.log("Data deleted successfully")
    }
    // return message;
};

const DelUserProcess = async (param) => {
    const message = await UserRepository.DelUser(param);
    if(message){
        console.log("Data not added")
    }else{
        console.log("Data deleted successfully")
    }
    // return message;
};

const AddUserProcess = async (data) => {
    const hash_password = await bcrypt.hash(data.password, 10);
    const username = data.username;
    const message = await UserRepository.AddUse(username, hash_password);
    if(message){
        console.log("Data not added")
    }else{
        console.log("New User Created successfully")
    }
    // return message;
};

//----------------------------------------------------------------------
const HomepageProcess =async (fullname,username,email,password) => {
    const hash = await bcrypt.hash(password,10);
    const message = await UserRepository.SignUp(fullname,username,email,hash);
    return message;

};
//---------------------------------forgot password process
const ForgPassProcess = async (username) => {
    const otp = (Math.floor(Math.random() * 1000000));
    const message = await UserRepository.ForgPass(username,otp);
    const transporter = nodemailer.createTransport({
        service: process.env.SERVICE_SENDER,//sender company:'gmail.com'
        auth: {
            user: process.env.COMP_MAIL_ID,//the sender email address
            pass: process.env.PASS_KEY//app password created by Google
        }
    });

    send();

    async function send() {
        const result = await transporter.sendMail({
            from: process.env.COMP_MAIL_ID,
            to: message,
            subject: 'Reset Password',
            // text: `Your OTP for password change is: ${otp} . OTP is valid for 5 minutes`
            html: 
            `<div class="container" style="max-width: 90%; margin: auto; padding-top: 20px">
                <h2>Welcome to the reset window: ${username} </h2>
                <h4>You OTP for reset password is:</h4>
                <h1 style="color:red; font-size: 40px; letter-spacing: 2px; text-align:center;">${otp}</h1>
                <p style="margin-bottom: 30px;">Pleas enter the sent OTP within 10min to get started</p>
                <p style="margin-bottom: 30px;"><a href = "https://www.tutorialspoint.com/html/html_email_links.htm">Reset using link</a></p>
            </div>`,
            link: `http://localhost:4000/auth/reset-password`
        });

        // console.log(JSON.stringify(result, null, 4));
        console.log("OTP sent to: "+JSON.stringify(result.accepted[0]));
        // const msg = "OTP sent to: " + JSON.stringify(result.accepted[0]);
    }
    params = {
        V_username: username,
        V_emailid: message,
        // V_otp: otp
    };
    if (otp != null) {
        return jwt.sign(params, process.env.FPASS_PRIVATE_KEY, {
            expiresIn: "10m"
        });
    } else {
        return ("invalid username");
    }
    // return msg;

};

const SubPassProcess = async (data) => {
    const message = await UserRepository.ResetPass(data);
    
    // const auth = jwt.verify(token,process.env.PRIVATE_KEY);
    // if (auth == true) {
    //     if(otp==data.V_otp){}
        
    // } else {
    //     return ("Request Timeout");
    // }
    // return msg;

};



module.exports = {
    SignInProcess,
    verifyTwoFAProcess,
    SignUpProcess,
    UpProfProcess,
    UpProfPic,
    DelProfProcess,
    DelUserProcess,
    AddUserProcess,
    HomepageProcess,
    DelUserProcess,
    ForgPassProcess,
    SubPassProcess,
}