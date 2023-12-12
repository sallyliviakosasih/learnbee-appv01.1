import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import * as z from 'zod';

//Mendeklarasikan Objek Schema untuk validasi pengguna:
const userSchema = z.object({
    fullName: z.string().min(2, {
        message: "Nama Lengkap is required",
      }),
      studentId: z.string().min(1,{message: "NIM is required"}).length(9,"NIM must be 9 digits"),
      email: z.string().min(1,{message: "Email is required"}),
      password: z.string().min(1,{message: "Kata Sandi is required"}),
      stambuk: z.string().min(1, {message:"Stambuk is required"}).length(4, {message:"Stambuk is invalid"}),
      jurusan: z.string().min(1, {message: "Jurusan is required"}),
      confirmPassword: z.string().min(1, {message: "Konfirmasi Kata Sandi is required"})
  })

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { fullName, studentId, email,  password, stambuk, jurusan } = userSchema.parse(body);
        //periksa apakah email sudah digunakan
        const existedEmail = await prisma.user.findUnique({
            where: {email : email}
        })
        if (existedEmail) {
            return NextResponse.json({user: null, message: "Email telah digunakan"});
        }

        //periksa apakah nim sudah digunakan:
        const existedNIM = await prisma.user.findUnique({
            where: {nim: studentId},
        })
        if (existedNIM) {
            return NextResponse.json({user: null, message: "NIM telah digunakan"});
        }
        const hashedPassword = await hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                name: fullName,
                nim: studentId,
                email: email,
                password: hashedPassword,
                stambuk: stambuk,
                jurusan: jurusan,
            }
        });
        const {password: newUserPassword, ...rest} = newUser;
        return NextResponse.json({user: rest, message:"Akun berhasil ditambahkan"}, { status: 201 });
    } catch (error) {
        return NextResponse.json({message: error}, {status: 501});
    }
}