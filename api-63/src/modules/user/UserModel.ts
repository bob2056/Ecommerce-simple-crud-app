import mongoose from "mongoose";
import { ImageSchemaData } from "../../utilities/commonSchema";
// _id property Primary key => ObjectId of mongodb
// _v: number to keep the version of the mongodb 

const UserSchmea = new mongoose.Schema(
  {
    name: {
      type: String,
      min: 2,
      max: 50,
      required: true,
    },
    email: {
      type: String,
      max: 200,
      required: true,
      unique: true,
    },
    // username: {
    //   type: String, 
    //   requried: true, 
    //   unique: true
    // },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["customer", "seller", "admin"],
      default: "customer",
    },
    address: String,
    // address: {
    //   shipping: String,
    //   billing: String,
    // },
    image: ImageSchemaData,
    phone: String,
    forgetPasswordToken: String,
    emailVerify: {
      type: Boolean,
      default: false,
    },
    activationToken: String,
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
  },
  {
    // options
    timestamps: true, // createdAt, updatedAt
    autoCreate: true, 
    autoIndex: true
  },
);
// User => users
const UserModel = mongoose.model("User", UserSchmea)
export default UserModel