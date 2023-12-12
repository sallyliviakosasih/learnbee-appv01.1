'use client'
import Image from "next/image"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  email: z.string().min(1,"Email is required").email("Invalid Email"),
  password: z.string().min(1,"Password is required"),
})

export default function LoginForm({userInfo}:any) {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const signinData = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (signinData?.error) {
      alert("Gagal Masuk");
    } else {
      alert("Berhasil Masuk. Selamat Datang!");
      router.refresh()
      router.push('/');
    }
  }
    return(
      <>
        <div className='bg-white border rounded-lg p-12 w-2/4 shadow-lg'>
          <Image className='mx-auto'
            src={'/logo/beeOnly.svg'}
            alt='Logo Learn Bee'
            width={67}
            height={68} 
          />
          <Image className='mx-auto my-2'
            src={'/logo/textOnly.svg'}
            alt='Logo 2 Learn Bee'
            width={139}
            height={23} 
          />
          <h2 className='text-center font-serif font-medium text-contrast text-3xl my-4'>Masuk</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 ">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukan Email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
              )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl className="w-full">
                      <Input placeholder="Masukan Password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="bg-primary-yellow text-contrast hover:bg-primary-yellow">Masuk</Button>
            </form>
          </Form>
        </div>
      </>
    )
}