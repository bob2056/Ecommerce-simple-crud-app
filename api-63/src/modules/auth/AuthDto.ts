import z from "zod";
export const emailRule = z.email().max(200).nonempty("Email is compulsory").nonoptional()
export const nameRule = z.string().min(2, "Name must have atleast 2 character").max(50, "Name cannot have more than 50 character")

export const UserRegisterDTO = z.object({
  name: nameRule,
  email: emailRule,
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\W]).{8,25}$/, "Password must comply with strong password").nonempty("Password is compulsory"),
  confirmPassword: z.string().nonempty("Confirm-password is compulsory"),
  phone: z.string().nonempty("Phone number is Compulsory"), // +977 98
  
  role: z.string().regex(/^(customer|seller)$/, "Role can be either 'customer' or 'seller' only").nonempty("Role is compulsory").default("customer"),    // customer, seller

  address: z.string().nullable().optional()
  // address: "",
  // // address: z.object({
  //       streetName: z.string().nullable().optional(),
  //       wardNo: z.string().nullable().optional(),
  //       localDevComm: z.string().nullable().optional(),
  //       district: z.string().nullable().optional(),
  //       province:z.string().nullable().optional()
  // }).nullable().optional()
  // "address": {
  //     "streetName": "",
  //     "wardNo": "",
  //     "localDevComm": "",
  //     "district": "",
  //     "province": ""
  // },
}).refine((val) =>val.password === val.confirmPassword , {
  message: "Password and confirm password must be same",
  path: ['confirmPassword']
})

export const LoginDto = z.object({
  username: z.email().nonempty().nonoptional(),
  password: z.string().min(8).nonempty().nonoptional()
})