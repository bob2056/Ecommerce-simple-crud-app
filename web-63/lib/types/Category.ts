import z from "zod";
import { IUserDetail } from "./Auth";
import { IImage } from "./Global";


export const CategoryDTO = z.object({
  name: z.string().min(3, "Name must be of at least 3 character long").max(50, "Name should not be longer then 50 characters"),
  summary: z.string().min(3, "Summary must be of at least 3 character long").max(160, "Summary should be less than 160 characters"),
  status: z.string().regex(/^(active|inactive)$/, 'Status must be either "active" or "inactive"').nonempty("Status is required").default("inactive"),
  parentId: z.string().nullable().optional(),
  image: z.file().nullable().optional()
});

export const CategoryCreateDTO = CategoryDTO.extend({
  image: z.file().nonoptional("Image is Compulsory")
});


// type definin
export type CategoryType = z.infer<typeof CategoryDTO>


export interface ICategoryDetail {
  _id: string
  name: string
  slug: string
  summary: string
  status: string
  parentId: null | ICategoryDetail,
  image: IImage,
  createdBy: IUserDetail,
  updatedBy: IUserDetail,
  createdAt: Date
  updatedAt: Date        
}