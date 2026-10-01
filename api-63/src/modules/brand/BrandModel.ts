import mongoose from "mongoose";
import { ImageSchemaData, StatusSchema, UserSchema } from "../../utilities/commonSchema";

const BrandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    summary: {
      type: String,
      min: 3,
      max: 160,
      required: true,
    },
    status: StatusSchema,
    image: ImageSchemaData,
    createdBy: UserSchema,
    updatedBy: UserSchema,
  },
  {
    autoCreate: true,
    autoIndex: true,
    timestamps: true,
  },
);

const BrandModel= mongoose.model("Brand", BrandSchema);
export default BrandModel