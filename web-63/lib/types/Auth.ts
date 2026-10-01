import z from "zod";
import { IImage } from "./Global";

export const LoginDTO = z.object({
  username: z.string().nonempty("Username is required").nonoptional(),
  password: z.string().nonempty("Password is required").nonoptional()
})

export type ICredentials = z.infer<typeof LoginDTO>

export interface IUserDetail {
  _id: string;
  name: string;
  email: string;
  role: string;
  emailVerified: boolean;
  address: string;
  status?: string;
  gender?: string;
  phone?: string;
  username?: string;
  birthDate?: string;
  image?: IImage;
}

export interface IAuthContext {
  loggedInUser: null | IUserDetail;
  login: (data: ICredentials) => Promise<void | IUserDetail>;
  getLoggedInUser: () => Promise<void | IUserDetail>
}
