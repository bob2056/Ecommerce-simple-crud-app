import { cookies } from "next/headers";
import axiosInstance from "./axiosclient"

export const getCategoryBySlug = async (slug: string) => {
  const cookieData= await cookies()
  const token = cookieData.get("_at_63")?.value; 

  return await axiosInstance.get("/category/" + slug, {
    headers: {
      Authorization: "Bearer " + token
    },
  });
}