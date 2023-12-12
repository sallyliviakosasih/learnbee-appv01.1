import SignupForm from "@/components/SignupForm"
import Header from "@/components/Header"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"


export default async function signup() {
    const session = await getServerSession(authOptions);
    return(
        <>
        <Header logged={session}/>
        <div className="flex items-center justify-center my-8">
            <SignupForm userInfo={session}/>
        </div>
        </>
    )
}