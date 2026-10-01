'use client';
import { ReactNode, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { ICredentials, IUserDetail } from "../types/Auth";
import axiosInstance from "../services/axiosclient";
import Cookies from "js-cookie";

export default function AuthProvider({children}: Readonly<{children: ReactNode}>) {
  const [userDetail, setUserDetail] =useState<IUserDetail|null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getLoggedInUser = async (): Promise<IUserDetail> => {
    try {
      const userDetail = await axiosInstance.get("/auth/me") as {data: IUserDetail}
      
      setUserDetail(userDetail.data)
      
      return userDetail.data
    } catch(exception) {
      console.log("GetLoggedInUser", exception)
      throw exception
    } finally {
      setLoading(false)
    }
  }

  const login = async (data: ICredentials) => {
    try {
      const response = await axiosInstance.post('/auth/login', data) as {data: {accessToken: string, refreshToken: string}}
      console.log(response)

      Cookies.set("_at_63", response.data.accessToken, {
        secure: true,
        expires: 1/24,
        sameSite: "Strict"
      });

      Cookies.set("_rt_63", response.data.refreshToken, {
        secure: true,
        expires: 1 ,
        sameSite: "Strict",
      });

      const loggedInUser = await getLoggedInUser()
      return loggedInUser

    } catch(exception) {
      console.log("Login Error: ", exception)
      throw exception
    }
  }

  useEffect(() => {
    // getLoggedInUser()
    const token = Cookies.get("_at_63")
    if(token) {
      getLoggedInUser()
    } else {
      setLoading(false)
    }
  }, [])

  return loading ? (
    <>Loading...</>
  ) : (
    <AuthContext.Provider
      value={{
        loggedInUser: userDetail,
        login: login,
        getLoggedInUser: getLoggedInUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}