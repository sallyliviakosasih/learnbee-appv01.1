"use client"
import Image from "next/image"
export default function Header({logged}: any) {
    return(
        <>
        <header>
            <div className='flex px-9 py-5' id='navigationContainer'>
                    <Image className='flex-none'
                        src={'/logo/logoNav.svg'}
                        alt='Logo LearnBee di Navigasi'
                        width={220}
                        height={39}
                    />
                    <div className='flex bg-mid-muted items-center rounded-full mx-auto px-7 py-4 w-1/2'>
                        <input type='text' placeholder='Cari Topik, Pertanyaan, Buku, ...' className='bg-transparent mx-4 w-full focus:outline-none'></input>
                        <button className=''>
                        <Image
                            src={"/icons/searchIcon.svg"}
                            alt="Ikon Pencarian"
                            width={24}
                            height={24}
                        />
                        </button>
                    </div>
                    {!logged &&
                        <>
                        <div className='w-3/12 items-center flex justify-center' id='notLogged'>
                            <a href='/login' className='bg-primary-yellow text-contrast rounded-full font-medium px-4 py-2 mx-5'>Masuk</a>
                            <a href='/signup' className='border-2 rounded-full font-medium border-contrast px-4 py-2 mx-5'>Daftar</a>
                        </div>
                        </>
                    }
                    {logged!=null &&
                        <div className='w-3/12 flex justify-center items-center gap-4' id='logged'>
                            <a href='/add-question' className='bg-primary-yellow text-contrast rounded-full font-medium px-4 py-2'>+ Ajukan pertanyaan</a>
                            <a href='/' className=''>
                            <Image
                                src={'/icons/homeIcon.svg'}
                                alt='Ikon Halaman Utama'
                                width={31}
                                height={31}
                            />
                            </a>
                            <a href='#'>
                            <Image className='rounded-full'
                                src={'/sample/sampleUser.png'}
                                alt='Gambar Profile'
                                width={45}
                                height={80}
                            />
                            </a>
                        </div>
                    }
                </div>
        </header>
    </>
    )
}