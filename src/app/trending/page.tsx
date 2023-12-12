import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Post from "@/components/Post";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Trending() {
    const session = await getServerSession(authOptions);
    console.log(session);
    return (
        <>
        <Header logged={session}/>
        <main>
            <div className='grid grid-cols-5'>
                <Navigation
                    activePage={"trending"}
                />
                {/*TODO-LIST: Post diurutkan berdasarkan jumlah vote*/}
                <div className='px-5 col-span-3'>
                    <Post/>
                </div>
            </div>
        </main>
        </>
    )
}