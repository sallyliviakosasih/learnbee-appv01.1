'use client'
import Image from "next/image"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
const FormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Nama Lengkap is required",
  }),
  studentId: z.string().min(1,{message: "NIM is required"}).length(9,"NIM must be 9 digits"),
  email: z.string().min(1,{message: "Email is required"}),
  password: z.string().min(1,{message: "Kata Sandi is required"}),
  confirmPassword: z.string().min(1, {message: "Konfirmasi Kata Sandi is required"}),
  stambuk: z.string().min(1, {message:"Stambuk is required"}).length(4, {message:"Stambuk is invalid"}),
  jurusan: z.string().min(1, {message: "Jurusan is required"}),
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: "Password doesn't match",
});

export default function SignupForm({userInfo}: any) {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      studentId: "",
      stambuk: "",
      jurusan: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })
  
  const onSubmit = async (values:z.infer<typeof FormSchema>) => {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: values.fullName,
        studentId: values.studentId,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        stambuk: values.stambuk,
        jurusan: values.jurusan,
      }),
    })
    if (response.ok) {
      alert("Akun Berhasil ditambahkan");
      //Jika user berhasil dibuat maka akan dialihkan ke halaman login
      router.push('/login');
    } else {
      alert("Akun gagal dibuat");
      router.refresh();
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
        <h2 className='text-center font-serif font-medium text-contrast text-3xl my-4'>Daftar</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan Nama Lengkap" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="studentId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor Induk Mahasiswa</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan Nama Lengkap" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stambuk"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stambuk Mahasiswa</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan Stambuk/Angkatan Mahasiswa" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jurusan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jurusan Mahasiswa</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan Jurusan Mahasiswa" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email USU</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan Email USU" type="email" {...field} />
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
                  <FormLabel>Kata Sandi</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan Kata Sandi" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Konfirmasi Kata Sandi</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan Konfirmasi Kata Sandi" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-primary-yellow text-contrast hover:bg-primary-yellow">Daftar</Button>
          </form>
        </Form>
       </div>
    </>
    )
}