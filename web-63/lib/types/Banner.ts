import z from "zod";

export const BannerDTO = z.object({
  title: z.string().min(3, "Title should be of atleast 3 character").max(100,'Title should not be more than 100 character'),
  url: z.url().nonempty().nonoptional(),
  status: z.string().regex(/^(active|inactive)$/, 'Status can be either active or inactive').nonempty().nonoptional(),
  image: z.file().optional()
})

export const BannerCreateDTO = BannerDTO.extend({
  image: z.file().nonoptional("Image is compulsory"),
});


// type definin
export type BannerType = z.infer<typeof BannerDTO>