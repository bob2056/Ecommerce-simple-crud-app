import { type NextFunction, type Request, type Response } from "express";
import { IAuthRequest } from "./AuthContract";

import { mapImage } from "../../utilities/helpers";
import bcrypt from "bcryptjs";
import UserModel from "../user/UserModel";
import EmailService from "../../services/EmailService";
import jwt from "jsonwebtoken"
import { appConfig } from "../../config/AppConfig";
import AuthModel from "./AuthModel";

class AuthController {
  registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;
      
      // image is if optional
      if(req.file) {
        body.image = mapImage(req?.file as Express.Multer.File, "users/")
      }
      // image is if compulsory
      // if(!req.file) {
      //   throw {code: 400, message: "Validation failed", detail: {image: "Image is compulsory"}}
      // }

      body.password = bcrypt.hashSync(body.password, 12)

      // verification step process 
      // body.status = "inactive"
      // body.emailVerify = false 
      // body.activationToken = randomString() 
      
      // skipping verification 
      body.status = "active"
      
      // db storage 
      const user = new UserModel(body)
      await user.save();


      const emailSvc = new EmailService();
      await emailSvc.sendEmail({
        to: user.email, 
        sub: "Your account has been registered",
        message: `Dear ${user.name} <br />
        Your account has been regsitered successfully. <br/>
        Please login to continue the access. <br/>
        Regards, <br/>
        System Admin<br/>
        <small>Do not print this email for nature's purpose.</small>
        `
      })      
      res.json({
        data: body,
        message: "Your account has been created",
        meta: null,
      });
    } catch(exception) {
      next(exception)   // error handling middleware call
    }
  }
  

  loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {username, password} = req.body;
      // username verify 
      const userDetail = await UserModel.findOne({email: username})
      if(!userDetail) {
        throw {code: 422, message: "User does not exists."}
      }

      if(!bcrypt.compareSync(password, userDetail.password)) {
        throw {code: 422, message: "Credentials does not match."}
      }

      // login success
      // if(userDetail.status !== 'active' || !userDetail.emailVerify) {
      //   throw {code: 403, message: "User account is not verified"}
      // }

      const accessToken = jwt.sign({
        sub: userDetail._id
      }, appConfig.jwtSecret as string, {
        expiresIn: "2h"
      });

      const refreshToken = jwt.sign({
          sub: userDetail._id,
      },appConfig.jwtRefreshSecret as string, {
        expiresIn: "1d"
      });
      
      // session store in db 
      let session = {
        userId: userDetail._id, 
        accessToken: accessToken,
        refreshToken: refreshToken,
        status: "active",
        agent: "web"
      }
      const sessionDetail = new AuthModel(session)
      await sessionDetail.save()
      // 

      res.json({
        data: {accessToken: accessToken, refreshToken: refreshToken}, 
        message: "You are loggedIn",
        meta: null
      })

    } catch(exception) {
      next(exception)
    }
  }
  

  handleForgetPasswordRequest = (req: Request, res: Response, next: NextFunction) => {
    res.json({
      data: null,
      message: "Forget password request sent to email",
      meta: null,
    });
  }
  

  resetPassword = (req: Request, res: Response, next: NextFunction) => {
    res.json({
      data: null,
      message: "Password reset successfully",
      meta: null,
    });
  }
  

  changePassword = (req: Request, res: Response, next: NextFunction) => {
    // login check
    // permission check
    res.json({
      data: null,
      message: "Password changed successfully",
      meta: null,
    });
  }
  

  getLoggedInUserProfile = (req: IAuthRequest, res: Response, next: NextFunction) => {
    // login check
    res.json({
      data: req.loggedInUser,
      message: "Your profile",
      meta: null,
    });
  }
  

}


export default AuthController