import z from "zod";
import { IUserDetail } from "./Auth";
import { IImage } from "./Global";


export const BrandDTO = z.object({
  name: z.string().min(3, "Name must be of at least 3 character long").max(50, "Name should not be longer then 50 characters"),
  summary: z.string().min(3, "Summary must be of at least 3 character long").max(160, "Summary should be less than 160 characters"),
  status: z.string().regex(/^(active|inactive)$/, 'Status must be either "active" or "inactive"').nonempty("Status is required").default("inactive"),
  image: z.file().nullable().optional()
});

export const BrandCreateDTO = BrandDTO.extend({
  image: z.file().nonoptional("Image is Compulsory")
});


// type definin
export type BrandType = z.infer<typeof BrandDTO>


export interface IBrandDetail {
  _id: string
  name: string
  slug: string
  summary: string
  status: string
  image: IImage,
  createdBy: IUserDetail,
  updatedBy: IUserDetail,
  createdAt: Date
  updatedAt: Date        
}