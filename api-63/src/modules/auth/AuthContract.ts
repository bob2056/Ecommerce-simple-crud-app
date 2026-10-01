import { Request } from "express";

export interface IUserDetail{
  _id: string, 
  name: string,
  email: string,
  role: string,
  emailVerified?: boolean,
  image?: {
    url?: string | null,
    path?: string | null,
    filename?: string | null,
    size?: number | null,
    type?: string | null,
  } | null | string,
  address?: string | null,
  status: string,
}

export interface IAuthRequest extends Request {
  loggedInUser?: IUserDetail | null
}