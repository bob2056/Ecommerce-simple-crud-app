import {Request} from "express"
import {IUserDetail} from "../modules/auth/AuthContract"

declare global {
  namespace Express {
    interface Request {
      loggedInUser?: IUserDetail | null | undefined
    }
  }
}

export {}