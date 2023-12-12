'use client'
import Image from "next/image"
import { useState } from "react"
export default function AnswerDetail(postInfo:any) {
    const [votes, setVotes] = useState(0);
    const handleAddVotes = () => {
        setVotes((prevVotes) => prevVotes + 1);
    }
    const post = postInfo.postInfo;
    console.log(post)

    return(
        <>
        <div className='border border-dark-muted px-6 py-5 my-5'>
            <div className='flex gap-5' id='headerQuestin'>
                <div className='' id='questionRates'>
                    <button onClick={handleAddVotes}>
                    <Image
                        src={'/icons/upvoteIcon.svg'}
                        alt='Ikon vote jawaban'
                        width={29}
                        height={29}
                    />
                    </button> {/*TODO-LIST*/}
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
            <div className='py-4' id='mainAnswer'>
                <h1 className='font-semibold text-md'>{post.content}</h1> {/*TODO LIST*/}
            </div>
        </div>
        </>
    )
}