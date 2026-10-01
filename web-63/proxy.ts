import { NextRequest, NextResponse } from "next/server";
import axiosInstance from "./lib/services/axiosclient";
import { toast } from "sonner";

export const config = {
  matcher: ['/cms/:path*']
}

export async function proxy(req: NextRequest) {
  const token = req.cookies.get("_at_63")?.value;
  
  // if token is not present
  if(!token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // 
  try {
    // const userDetail = 
    await axiosInstance.get('/auth/me', {
      headers: {
        Authorization: "Bearer "+token
      }
    })
    // if(userDetail)
    return NextResponse.next();
  } catch(exception) {
    console.log(exception)
    toast.error("User not found.")
    return NextResponse.redirect(new URL("/login", req.url))
  }
}

