//business layer
const { CREATED } = require("http-status");
const authServices = require("../services/authenticationService");

const SignIn = async (res, req) => {
    const { username, password } = res.body;
    const token = await authServices.SignInProcess(username, password) //for manual testing
    req.send({ token });
    console.log(token);
};

const SignIn2FA = async (res, req) => {
    const { username, password } = res.query;
    const token = await authServices.verifyTwoFAProcess(username, password) //for manual testing
    req.send({ token });
    console.log(token);
};

// const SignUp = async (res, req) => {
//     const { fullname, username, emailid, phnumber, DOB, country, state, city, pincode, password } = res.query;
//     const token = await authServices.SignUpProcess(fullname, username, emailid, phnumber, DOB, country, state, city, pincode, password)
//     req.send('Table CREATED');
// };

const SignUp = async (res, req) => {
    const { fullname, username, emailid, phnumber, DOB, country, state, city, pincode, password } = res.body;
    const token = await authServices.SignUpProcess(fullname, username, emailid, phnumber, DOB, country, state, city, pincode, password)
    req.status(200);
    req.send({message:'User Registered'});
};

const UpdateProfile = async (res, req) => {
    const username = res.body;
    // const file = res.file;
    // const token = await authServices.UpProfProcess(username, file)
    await authServices.UpProfProcess(username, file)
    // res.send({ token });
    req.send('Profile updated');
};

const UploadProfilePic = async (res, req) => {
    console.log(res.file);
    console.log(res.file.filename);
    console.log(res.body.username);
    const username = res.body.username;
    // const file = res.file.filename;
    const file = res.file;
    await authServices.UpProfPic (username, file)
    // const { fullname, emailid, phnumber, DOB, country, state, city, pincode } = res.body;
    // const token = await authServices.UpProfPic(fullname, emailid, phnumber, DOB, country, state, city, pincode)
    // res.send({ token });
    req.send('Profile Pic uploaded');
};

const ProfilePic = async (res, req) => {
    console.log(res.file);
    console.log(res.file.filename);
    console.log(res.body.username);
    const username = res.body.username;
    // const file = res.file.filename;
    const file = res.file;
    await authServices.UpProfPic (username, file)
    // const { fullname, emailid, phnumber, DOB, country, state, city, pincode } = res.body;
    // const token = await authServices.UpProfPic(fullname, emailid, phnumber, DOB, country, state, city, pincode)
    // res.send({ token });
    req.send('Profile Pic ');
};

const DeleteProf = async (res, req) => {
    const param = "Cortney_Nolan";
    // const { fullname, emailid, phnumber, DOB, country, state, city, pincode} = res.body;
    await authServices.DelProfProcess(param)
    // res.send({ token });
    req.send('Profile Deleted');
};

const DeleteUser = async (res, req) => {
    const param = "Hyman.Greenholt";//later take from the pages which user must be deleted
    await authServices.DelUserProcess(param)
    req.send('Profile Deleted');
};

const AddUser = async (res, req) => {
    const data = res.body;
    console.log(data);
    await authServices.AddUserProcess(data)
    // res.send({ token });
    req.send('User Created');
};

const ForgotPassword = async (res, req) => {
    const { username} = res.body;
    const token = await authServices.ForgPassProcess(username)
    req.send({ token });
    console.log("kindly check your Email");
};

const SubmitPassword = async (res, req) => {
    const { data } = res.body;
    var authorization = req.headers.authorization.split(' ')[1],decoded;
    decoded = jwt.verify(authorization, process.env.FPASS_PRIVATE_KEY);
    console.log(decoded.V_username);
    const token = await authServices.SubPassProcess(data)
    req.send("Password changed successfully");
};

//----------------------------------------------------------------------------------------------------------------------------------------------
const SignInView = async (res, req) => {
    req.render('pages/signin', {})
    req.session.user = req.body.emailid;
    if (!null) {
        res.redirect('/route/homepage')
    } else {
        console.log(err)
    }
};

const Homepage = async (res, req) => {
    const { fullname, username, emailid, password } = req.body;
    const token = await authServices.HomepageProcess(fullname, username, emailid, password)
    res.send({ token });
};
//-------------------------------------------------------------------------------------------

//DEMO-------------------
const SignIn2 = async (res, req, next) => {
    console.log("hyy");
};

module.exports = {
    SignIn,
    SignIn2FA,
    SignUp,
    UpdateProfile,
    UploadProfilePic,
    DeleteProf,
    DeleteUser,
    AddUser,
    SignInView,
    Homepage,
    ForgotPassword,
    SignIn2,
    SubmitPassword,
}
//old ones not working yet
// const ForgotPassword2 = async (res, req) => {
//     let mailTransport = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             type: 'jyotishankar.evince.demo@gmail.com',
//             password: 'remmsxmewjnmzzzw'
//         }
//     });
//     let details = {
//         from: 'jyotishankar.evince.demo@gmail.com',
//         to: 'jyotishankarpanda55@gmail.com',
//         subject: 'Reset Password',
//         text: 'Please reset your password'
//     }
//     mailTransport.sendMail(details, (err, info) => {
//         if (err) {
//             console.log("it has an error", err);
//         } else {
//             console.log("it has an info", info);
//         }
//     })
// };