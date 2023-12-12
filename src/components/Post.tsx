"use client"
import { useState } from "react";
import Image from "next/image";
export default function Post(postInfo:any){
    const [votes, setVotes] = useState(0);
    {/*TODO-LIST: Buat fungsi tersebut terhubung ke database*/}
    const handleAddVotes = () => {
        setVotes((prevVotes) => prevVotes + 1);
    }
    
    const posts = postInfo.postInfo;
    return(
        <div className='border border-dark-muted my-8 px-6 py-5'>
            <div className='flex gap-5' id='headerQuestin'>
                <div className='' id='questionRates'>
                    <button onClick={handleAddVotes}> 
                    <Image
                        src={'/icons/upvoteIcon.svg'}
                        alt='Ikon vote pertanyaan'
                        width={29}
                        height={29}
                    />
                    </button>
                    <h1 className='text-center text-lg'>{votes}</h1> {/*TODO LIST*/}
                </div>
                <div className='grid grid-rows-2' id='uploaderDetail'>
                    <div className='flex gap-4 items-center' id='userDetail'>
                        <h1 className='font-bold text-lg'>{posts.author.name}</h1> {/*TODO LIST*/}
                        <div className='flex gap-1 text-sm text-darker-muted'>
                            <h2>{posts.author.stambuk}</h2> {/*TODO LIST*/}
                            <h2>{posts.author.jurusan}</h2> {/*TODO LIST*/}
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-4' id='mainQuestion'>
                <h1 className='font-bold text-lg'>{posts.title}</h1> {/*TODO LIST*/}
                <h2>{posts.content}</h2>
            </div>
            <div className='flex relative items-center' id='QuestionDetail'>
                {/*TODO LIST : Tampilkan kategori sesuai jumlah yang diinput*/}
                <div className='flex px-4 gap-3' id='tags'>
                    {
                        (posts.tags).map((tag:any) => {
                            if (tag!="") {
                                return(
                                    <>
                                        <a href='#' className='bg-grey text-darker-muted px-4 py-2 rounded-full' key={tag}>{tag}</a>
                                    </>
                                )
                            }
                        })
                    }
                </div>
                <a href={`/question/${posts.id}`} className='flex absolute right-0 px-4 py-2 border rounded-full '> {/*TODO-LIST : ID harus dirender secara otomatis sesuai dengan ID Pertanyaan*/}
                    <h1>Bantu Jawab</h1>
                    <Image className='mx-2'
                        src={'/icons/arrowIcon.svg'}
                        alt='Ikon Selanjutnya'
                        width={14}
                        height={15}
                    />
                </a>
            </div>
        </div>
    )
}