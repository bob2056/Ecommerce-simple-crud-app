'use client';
import { useForm } from "react-hook-form";
import { ICredentials, LoginDTO } from "@/lib/types/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLabel } from "../ui/form/Label";
import { FormInput } from "../ui/form/Input";
import Link from "next/link";
import { CancelButton, SubmitButton } from "../ui/button/FormButtons";
import { useAuth } from "@/lib/hook/useAuth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function LoginForm() {
  const {control, handleSubmit, formState: {errors, isSubmitting}} = useForm<ICredentials>({
    defaultValues: {
      username: "",
      password: ""
    },
    resolver: zodResolver(LoginDTO)
  })
  const [loading, setLoading] = useState<boolean>(true)
  const {login, loggedInUser} = useAuth()
  const router = useRouter()

  const loginSubmit = async (data: ICredentials) => {
    try {
      await login(data)
      toast.success("Welcome to cms Panel!!!")
      router.push('/cms')

    } catch(exception) {
      // console.log("exception: ",exception)
      toast.error("Incorrect login credentials")
    }
  }

  useEffect(() => {
    if(loggedInUser) {
      toast.info("You are already logged in")
      router.push("/cms")
    } else {
      setLoading(false)
    }
  }, [])

  return loading ? (
    "loading"
  ) : (
    <form
      onSubmit={handleSubmit(loginSubmit)}
      className="flex flex-col gap-5 w-5xl mx-auto bg-gray-100 p-5"
    >
      <h1 className="text-4xl font-semibold underline">Login</h1>

      <div className="w-full flex gap-3 items-center">
        <FormLabel htmlFor="username">
          Username<span className="text-lg text-red-800">*</span>:{" "}
        </FormLabel>
        <div className="w-3/4">
          <FormInput
            name="username"
            control={control}
            errmsg={errors?.username?.message}
          />
        </div>
      </div>
      <div className="w-full flex gap-3 items-center">
        <FormLabel htmlFor="password">
          Password<span className="text-lg text-red-800">*</span>:{" "}
        </FormLabel>
        <div className="w-3/4">
          <FormInput
            name="password"
            type="password"
            control={control}
            errmsg={errors?.password?.message}
          />
        </div>
      </div>

      <div className="w-full flex gap-3 items-center justify-end">
        <Link
          href={"/forget-password"}
          className="flex italic text-teal-700 text-sm underline hover:text-teal-900 transition duration-300"
        >
          Forget password?
        </Link>
      </div>
      <div className="w-full flex gap-3 items-center justify-end">
        <CancelButton disabled={isSubmitting}>Cancel</CancelButton>
        <SubmitButton disabled={isSubmitting}>Login</SubmitButton>
      </div>
    </form>
  );
}