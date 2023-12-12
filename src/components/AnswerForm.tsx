"use client"
import Image from "next/image"
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function AnswerForm(postInfo:any) {
    const post = postInfo.postInfo;
    const [answer, setAnswer] = useState("");
    const router = useRouter();

    const handleInputAnswer = (event:any) =>{
        const {value} = event.target;
        setAnswer(value);
    }
    const handleSubmit = async() => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                comment: answer,
                postId: post.id,
            })
        })
        if (response.ok) {
            alert("Jawaban Berhasil ditambahkan");
            router.refresh();
        } else {
            alert("Jawaban Gagal ditambahkan");
            router.refresh();
        }
    }
    return(
        <>
            <div className="flex items-center my-2">
                <Image className='rounded-full'
                    src={'/sample/sampleUser.png'} //TODO-LIST
                    alt='Gambar Profile'
                    width={45}
                    height={80}
                />
                <h1 className="mx-2 font-bold text-lg">{post.author.name}</h1> {/*TODO-LIST*/}
                <div className='flex gap-1 text-sm text-darker-muted mx-2'>
                    <h2>{post.author.stambuk}</h2> {/*TODO LIST*/}
                    <h2>{post.author.jurusan}</h2> {/*TODO LIST*/}
                </div>
            </div>
            <div className="my-2">
                <form>
                    <textarea placeholder="Berikan Jawaban Anda" className="w-full border border-dark-muted rounded-lg resize-none py-2 px-4 my-2" rows={10} onChange={handleInputAnswer}></textarea>
                </form>
                <button className="bg-primary-yellow rounded-lg py-2 px-4 my-2" onClick={handleSubmit}>Kirim Jawaban</button> {/*TODO-LIST*/}
            </div>
        </>
    )
}