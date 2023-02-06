const express = require("express");
const validator = require('express-joi-validation').createValidator({})
const router = express.Router();
const multer = require("multer");

const passport = require("passport");
require("../helper/JwtStragey")(passport);

const authSchema = require("./../validation/authenticationSchema");
const ctrl = require("./../controllers/AuthController");

//passport

//middleware-1
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "resources/uploads/")
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  })
}).single("profile_pic")

//middleware-2


router.post("/signup2", validator.query(authSchema.SignUpSchema), ctrl.SignUp);
router.post("/signup", validator.body(authSchema.SignUpSchema2), ctrl.SignUp);
router.post("/login", validator.body(authSchema.SignInSchema), ctrl.SignIn);
router.use("/twoFAverified", passport.authenticate("jwt", { session: false }));
router.get("/login/2FA", validator.query(authSchema.SignIn2FASchema), ctrl.SignIn2FA);
router.get("/home", ctrl.Homepage);
router.get("/home/profile", ctrl.Profile);
router.post("/home/profile/updateprofilepic", upload, ctrl.UploadProfilePic);
// router.post("/home/profile/updateprofilepic", upload.array("profile_pic",5), ctrl.UploadProfilePic);
// router.post("/home/profile/updateprofilepic", upload.none(), ctrl.UploadProfilePic);
// router.post("/home/profile/photo", upload, ctrl.ProfilePic);
router.patch("/home/updateprofile", validator.body(authSchema.UpdateSchema), ctrl.UpdateProfile);
router.delete("/home/deleteprofile", ctrl.DeleteProf);
router.delete("/home/admin/deleteuser", ctrl.DeleteUser);
router.post("/home/admin/add_user", ctrl.AddUser);
router.post("/home/admin/add_user", ctrl.SignUp);
router.post("/forgotpassword", validator.body(authSchema.ResetPassSchema), ctrl.ForgotPassword);
router.post("/submitpassword", validator.body(authSchema.SubmtOtpPassSchema),
  passport.authenticate("jwt", { session: false }), ctrl.SubmitPassword);

router.get("/loginview", ctrl.SignInView);

//for test the query
router.get('/orders', validator.query(authSchema.querySchema), (req, res) => {
  // If we're in here then the query was valid!  
  res.end(req.query.name)
});
router.post('/test', validator.body(authSchema.testSchema),)

module.exports = router;