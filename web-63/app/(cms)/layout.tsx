import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import "../globals.css";
import { CMSHeader } from "@/components/cms/CMSHeader";
import { CMSSidebar } from "@/components/cms/CMSSidebar";
import AuthProvider from "@/lib/provider/AuthProvider";
import { Toaster } from "sonner";

const PoppinsSans = Poppins({
  variable: "--font-custom-sans",
  weight: ["100","200","300","400","500","600","700","800","900"]
})

export const metadata: Metadata ={
  title: "CMS Page || Dashboard",
  description: "This is admin or CMS panel from where you will manage the content of the platform"
}
export default function CMSLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <html className={`${PoppinsSans.variable}`}>
      <body>
        <AuthProvider>
          {/* Provider setup -> check if logged In access <></> */}
          <Toaster richColors closeButton />
          <CMSHeader />
          <section className="w-full flex">
            <aside className="hidden lg:block lg:w-100 bg-gray-200 ">
              <CMSSidebar />
            </aside>
            <section className="w-full">{children}</section>
          </section>
        </AuthProvider>
      </body>
    </html>
  );
}