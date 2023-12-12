import Header from "@/components/Header"
import LoginForm from "@/components/LoginForm"
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function login() {
    const session = await getServerSession(authOptions);
    return(
        <>
        <Header logged={session}/>
        <div className="flex items-center justify-center my-8">
            <LoginForm userInfo={session}/>
        </div>
        </>
    )
}