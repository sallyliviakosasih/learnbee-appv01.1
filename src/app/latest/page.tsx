import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Post from "@/components/Post";

export default function Latest() {
    return (
        <>
        <Header isLogged={false}/> {/*TODO LIST: Buat Session yang dapat menentukan nilai ini secara otomatis*/}
        <main>
            <div className='grid grid-cols-5'>
                <Navigation
                    activePage={"latest"}
                />
                {/*TODO-LIST: Post diurutkan berdasarkan yang terbaru*/}
                <div className='px-5 col-span-3'>
                    <Post/>
                </div>
            </div>
        </main>
        </>
    )
}