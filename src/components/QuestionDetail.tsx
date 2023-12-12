'use client'
import Image from "next/image"
import AnswerForm from "./AnswerForm"
import { useState } from "react"

export default function QuestionDetail(postInfo:any) {
    {/*TODO-LIST: Buat fungsi ini terhubung ke database*/}
    const [votes, setVotes] = useState(0);
    const handleAddVote = () => {
        setVotes((prevVotes) => prevVotes + 1);
    }
    const post = postInfo.postInfo;
    return (
        <>
            <div className='border border-dark-muted my-8 px-6 py-5'>
                <div className='flex gap-5' id='headerQuestin'>
                    <div className='' id='questionRates'>
                        <button onClick={handleAddVote}>
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
                        <h1 className='font-bold text-lg'>{post.author.name}</h1> {/*TODO LIST*/}
                        <div className='flex gap-1 text-sm text-darker-muted'>
                            <h2>{post.author.stambuk}</h2> {/*TODO LIST*/}
                            <h2>{post.author.jurusan}</h2> {/*TODO LIST*/}
                        </div>
                        </div>
                    </div>
                </div>
                <div className='py-4' id='mainQuestion'>
                    <h1 className='font-bold text-lg'>{post.title}</h1> {/*TODO LIST*/}
                    {/*TODO LIST : Jika ada Gambar maka tampilkan bagian ini, Jika tidak maka hilangkan bagian ini*/} 
                    <h2>{post.content}</h2>
                </div>
                {/*TODO LIST : Tampilkan kategori sesuai jumlah yang diinput*/}
                <div className='flex px-4 gap-3' id='tags'>
                {
                        (post.tags).map((tag:any) => {
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
            </div>
            <div className="my-8">
                <AnswerForm 
                    postInfo = {post}
                />
            </div>
        </>
    )
}