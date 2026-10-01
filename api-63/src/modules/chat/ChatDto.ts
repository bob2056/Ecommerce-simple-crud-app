import { z } from "zod";

export const GeminiQueryDTO = z.object({
  question: z.string().min(5).nonempty().nonoptional()
})

export const SendMessageDTO = z.object({
  // message: z.string().nullable().optional(),
  message: z.string().min(1).max(2000),
  receiver: z.string().nonempty().nonoptional()
  // sender: z.string()
});