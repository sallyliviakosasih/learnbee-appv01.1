import Image from "next/image"
export default function Navigation({activePage}:any) {
    return (
        <div className='col-span-1 ml-10'>
            <h1>Feed</h1>
            <nav>
                <a href='/' className={`flex px-3 py-2 my-2 ${activePage=="homepage" && "bg-primary-yellow rounded-lg"}`}>
                    <Image
                        src={'/icons/homeIcon.svg'}
                        alt='Ikon Halaman Utama'
                        width={18}
                        height={20}
                    />
                    <h2 className='px-2'>Halaman Utama</h2>
                </a>
                <a href='/latest' className={`flex px-3 py-2 my-2 ${activePage=="latest" && "bg-primary-yellow rounded-lg"}`}>
                    <Image
                        src={'/icons/latestIcon.svg'}
                        alt='Ikon Terbaru'
                        width={18}
                        height={18}
                    />
                    <h2 className='px-2'>Terbaru</h2>
                </a>
                <a href='/trending' className={`flex px-3 py-2 my-2 ${activePage=="trending" && "bg-primary-yellow rounded-lg"}`}>
                    <Image
                        src={'/icons/trendingIcon.svg'}
                        alt='Ikon Trending'
                        width={18}
                        height={18}
                    />
                    <h2 className='px-2'>Trending</h2>
                </a>
            </nav>
        </div>
    )
}