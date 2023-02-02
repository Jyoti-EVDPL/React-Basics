//DATABASE LAYER
//insted of reepeting model everywhere we declared it here
//IMP:no error handling will be done here also in controller
const bcrypt = require("bcrypt");
const fs = require("fs");
const { where } = require("sequelize");
const User = require("./../models/UserModel");
const fOtps = require("../models/FpassOtpModel");
const uImage = require("../models/UserImage");
//for login
const SignIn = async (username, password) => {
    // console.log(username,password);
    const data = await User.findOne({ where: { username: username } });
    // console.log(data);
    // console.log(password);
    // console.log(data.dataValues.password);
    // const result = await bcrypt.compare(password, data.dataValues.password)
    // console.log("Is passsword match");
    // console.log(result);
    // let params = {
    //     emailid:data.email_id,username:data.username
    //   };
    //   console.log(params);
    // return result;
    return data;

};

//for signup
const SignUp = async (fullname, username, emailid, phnumber, DOB, country, state, city, pincode, password) => {
    // await User()
    // await bcrypt.hash(password, 10).then(function (hash) {
    //     password = hash;
    // console.log(hash);
    //     console.log(password);
    //     console.log(phnumber);
    // });
    await User.create({
        full_name: fullname,
        username: username,
        email_id: emailid,
        phnumber: phnumber,
        DOB: DOB,
        country: country,
        state: state,
        city: city,
        pincode: pincode,
        password: password,
    });
};
// let username = req.body.username;
// let fullName = req.body.fullName;
// let emailid = req.body.emailid;
// let password;

// await bcrypt.hash(req.body.password, 10).then(function (hash) {
//     password = hash;
// });
// const data = await User.create({
//     full_name: fullName,
//     user_name: username,
//     password: password,
//     email_id: emailid,
// });
// message = "Data added successfully"

const UpdProf = async (fullname, emailid, phnumber, DOB, country, state, city, pincode) => {
    // await User()
    // await bcrypt.hash(password, 10).then(function (hash) {
    //     password = hash;
    // console.log(hash);
    // console.log(password);
    // console.log(phnumber);
    // });
    const username = "adidash"
    await User.update({
        full_name: fullname,
        email_id: emailid,
        phnumber: phnumber,
        DOB: DOB,
        country: country,
        state: state,
        city: city,
        pincode: pincode
    }, { where: { username } });
};

const UpdProfPIC = async (username, file) => {
    await uImage.create({
        username: username,
        type: file.mimetype,
        name: file.filename,
        data: fs.readFileSync("resources/uploads/" + file.filename
        ),
    }).then((image) => {
        fs.writeFileSync("resources/tmp/" + image.name,
            image.data
        );
    });
    return true;
};

const DelProf = async (param) => {
    const username = "Evan.Pouros"
    // await User.destroy({
    //     full_name,
    //     email_id,
    //     phnumber,
    //     DOB,
    //     country,
    //     state,
    //     city,
    //     pincode
    // }, { where: { username: param } });
    await User.destroy({ where: { username: param } });
};

const DelUser = async (param) => {
    await User.destroy({ where: { username: param } });
};

const AddUse = async (username, hash_password) => {
    await User.create({
        username: username,
        password: hash_password
    });
};

const ForgPass = async (username, otp) => {
    const data = await User.findOne({ where: { username: username } });
    if (data) {
        await fOtps.create({
            username: username,
            otp: otp,
            user_id: data.id,
            for_fpass: true,
        })
    }
    return data.dataValues.email_id;
};

// const VerifyOTP = async (data) => {
//     const data = await User.update(
//         { password: data.newpassword},
//         { where: { username: username } }
//     );
//     await fOtps.create({
//         user_id: data.id,
//         otp: otp
//     })
//     return data.dataValues.email_id;
// };

const ResetPass = async (data) => {
    const dbOtp = await fOtps.findOne(
        { otp: otp },
        { where: { user_id: username } }
    );
    if (data.otp == dbOtp.otp) {
        const data1 = await User.update(
            { password: data.newpassword },
            { where: { username: username } }
        );
        await fOtps.update({
            isUsed: 'TRUE',
        })
    }
    return data.dataValues.email_id;
};

//this is used to update password later
// const UpdtPass = async (username) => {
//     const data = await User.findOne({ where: { username: username } });
//     return data;
// };

module.exports = {
    SignIn,
    SignUp,
    UpdProf,
    UpdProfPIC,
    DelProf,
    DelUser,
    AddUse,
    ForgPass,
    // VerifyOTP,
    ResetPass,
}