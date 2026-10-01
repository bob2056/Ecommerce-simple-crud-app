import z from "zod";

export const CategoryCreateDTO = z.object({
  name: z.string().min(3, "Name must be of at least 3 character long").max(50, "Name should not be longer then 50 characters"),
  summary: z.string().min(3, "Summary must be of at least 3 character long").max(160, "Summary should be less than 160 characters"), 
  status: z.string().regex(/^(active|inactive)$/, 'Status must be either "active" or "inactive"').nonempty("Status is required").default("inactive"), 
  parentId: z.string().nullable().optional()
})