"use client"
import Image from "next/image"
import AnswerForm from "./AnswerForm"
import { useState } from "react"
export default function QuestionDetail(idQuestion:any) {
    {/*TODO-LIST: Buat fungsi ini terhubung ke database*/}
    const [votes, setVotes] = useState(0);
    const handleAddVote = () => {
        setVotes((prevVotes) => prevVotes + 1);
    }
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
                        <h1 className='font-bold text-lg'>{"Sally Livia Kosasih"}</h1> {/*TODO LIST*/}
                        <div className='flex gap-1 text-sm text-darker-muted'>
                            <h2>{"2020"}</h2> {/*TODO LIST*/}
                            <h2>{"Ilmu Komputer"}</h2> {/*TODO LIST*/}
                        </div>
                        </div>
                        <h2 className='text-sm text-darker-muted' id='time'>{"2 Menit yang lalu"}</h2> {/*TODO LIST*/}
                    </div>
                </div>
                <div className='py-4' id='mainQuestion'>
                    <h1 className='font-bold text-lg'>{"Tolong Bantu Selesaikan persamaan berikut"}</h1> {/*TODO LIST*/}
                    {/*TODO LIST : Jika ada Gambar maka tampilkan bagian ini, Jika tidak maka hilangkan bagian ini*/} 
                    <Image className='mx-auto my-3'
                        src={'/sample/sample1.png'}
                        alt='Gambar Soal'
                        width={820}
                        height={320}
                    />
                    {/*TODO LIST : Jika ada Konteks Maka tampilkan bagian ini, jika tidak maka hilangkan*/}
                    <h2>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo sapien eu massa sollicitudin, non convallis lectus auctor. Curabitur gravida eros ut lectus consequat, eget sollicitudin arcu tristique. Cras ornare eros non mi gravida, vitae consequat justo fermentum. Mauris facilisis turpis sed dolor lobortis, non tristique urna vestibulum. Pellentesque vitae justo quis augue commodo tempor. Quisque facilisis lacus eu tellus posuere, a convallis augue imperdiet. Mauris mollis neque eu lorem tempus, non commodo erat consequat. Cras tincidunt lacinia turpis, ut pellentesque metus commodo eu. Nulla facilisi."}</h2>
                </div>
                {/*TODO LIST : Tampilkan kategori sesuai jumlah yang diinput*/}
                <div className='flex px-4 gap-3' id='tags'>
                    <a href='#' className='bg-grey text-darker-muted px-4 py-2 rounded-full'>vscode</a>
                    <a href='#' className='bg-grey text-darker-muted px-4 py-2 rounded-full'>javascript</a>
                </div>
            </div>
            <div className="my-8">
                <AnswerForm idUser={1} idQuestion={2} id/>
            </div>
        </>
    )
}