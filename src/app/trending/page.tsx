import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Post from "@/components/Post";

export default function Trending() {
    return (
        <>
        <Header isLogged={false}/> {/*TODO LIST: Buat Session yang dapat menentukan nilai ini secara otomatis*/}
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