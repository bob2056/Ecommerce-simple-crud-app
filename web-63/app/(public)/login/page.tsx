import LoginForm from "@/components/auth/LoginForm"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: "Login Form || Ecommerce-all product solution"
}
export default function LoginPage() {
  
  return (<section className="w-full py-10 flex items-center justify-center">
    <LoginForm />
  </section>)
}