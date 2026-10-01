import { Router } from "express";
import AuthController from "./AuthController";
import Auth from "../../middlewares/AuthMiddleware";
import uploader from "../../middlewares/UploaderMiddleware";

import bodyValidator from "../../middlewares/BodyValidationMiddleware";
import { LoginDto, UserRegisterDTO } from "./AuthDto";

const authRouter = Router();
const authCtrl= new AuthController()



authRouter.post("/register", uploader('/users').single('image'), bodyValidator(UserRegisterDTO), authCtrl.registerUser);
authRouter.post("/login", bodyValidator(LoginDto), authCtrl.loginUser);

authRouter.get("/me", Auth(), authCtrl.getLoggedInUserProfile);   // any loggedin user can acess this route
authRouter.post("/change-password", Auth(['admin']), authCtrl.changePassword);  // only "admin" can access this route

authRouter.get("/forget-password-request", authCtrl.handleForgetPasswordRequest);
authRouter.post("/reset-password", authCtrl.resetPassword);



export default authRouter