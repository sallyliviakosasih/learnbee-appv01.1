import NextAuth from "next-auth"

declare module "next-auth" {
    interface User {
        id: string
        stambuk: string,
        jurusan: string,
    }
  interface Session {
    user: User & {
      id: string
      stambuk: string,
      jurusan: string,
    }
    token: {
        id: string,
        stambuk: string,
        jurusan: string,
    }
  }
}