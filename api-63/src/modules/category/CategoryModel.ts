import mongoose from "mongoose";
import { ImageSchemaData, StatusSchema, UserSchema } from "../../utilities/commonSchema";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
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
    parentId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      default: null,
    },
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

const CategoryModel= mongoose.model("Category", CategorySchema);
export default CategoryModel