'use client'
import { useAuth } from "@/lib/hook/useAuth";
import React from "react";

export default function PermissionAllowed({role, children}: Readonly<{role: 'admin' |'customer' | 'seller', children: React.ReactNode}>) {
  const {loggedInUser} = useAuth()
  if(loggedInUser?.role === role) {
    return children
  } else {
    return <></>
  }
}