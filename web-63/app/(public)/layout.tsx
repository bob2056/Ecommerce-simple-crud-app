import { ReactNode } from "react";
import {Roboto, Roboto_Mono} from "next/font/google"

import "../globals.css";
import { Metadata } from "next";
import HomeHeader from "@/components/header/HomeHeader";
import HomeFooter from "@/components/footer/HomeFooter";
import AuthProvider from "@/lib/provider/AuthProvider";
import { Toaster } from "sonner";

// font, image, component 
const RobotoSans = Roboto({
  variable: "--font-custom-sans",
  subsets: ['latin']
})
const RobotMono = Roboto_Mono({
  variable: "--font-custom-mono",
  subsets: ['latin']
})

// server side component 

export const metadata: Metadata = {
  title: "Ecommerce Home Page",
  description:
    "Ecommerce home is a place where you find all sort of goods and services.",
  openGraph: {
    title: "Ecommerce Home Page",
    description:
      "Ecommerce home is a place where you find all sort of goods and services.",
    // images: [""]
    type: "website"
  },
  twitter: {
    title: "Ecommerce Home Page",
    description:
      "Ecommerce home is a place where you find all sort of goods and services.",
    card: "summary"
  },
};



export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <html
      className={`${RobotoSans.variable} ${RobotMono.variable} antialiased `}
    >
      <body>
        {/* reducer: {reducer, reducer, reducer} */}
        {/*  Another Provider */}
        <AuthProvider>
          {/*  Another Provider */}

          <Toaster richColors closeButton />
          <HomeHeader />

          {children}

          <HomeFooter />
        </AuthProvider>
      </body>
    </html>
  );
}