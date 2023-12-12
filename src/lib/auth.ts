import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions  = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login', //Ubah halaman signin credential menjadi halaman login yg telah dibentuk.
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      //Input area
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email dari Credentials" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const existedUser = await prisma.user.findUnique({
          where: { email: credentials.email}
        });
        if (!existedUser) {
          return null;
        }
        const passwordMatch = await compare(credentials.password, existedUser.password);
        if (!passwordMatch) {
          return null;
        }
        return {
          id: existedUser.id+'',
          email: existedUser.email,
          name: existedUser.name,
          stambuk: existedUser.stambuk,
          jurusan: existedUser.jurusan,
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        return {
          ...token,
          id: user.id,
          jurusan: user.jurusan,
          stambuk: user.stambuk,
        }
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          jurusan: token.jurusan,
          stambuk: token.stambuk,
        }
      }     
      return session
    },
  }
}