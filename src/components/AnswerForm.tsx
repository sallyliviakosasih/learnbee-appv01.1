import Image from "next/image"
export default function AnswerForm({idUser, idQuestion}:any ) {
    return(
        <>
            <div className="flex items-center my-2">
                <Image className='rounded-full'
                    src={'/sample/sampleUser.png'} //TODO-LIST
                    alt='Gambar Profile'
                    width={45}
                    height={80}
                />
                <h1 className="mx-2 font-bold text-lg">Sally Livia Kosasih</h1> {/*TODO-LIST*/}
                <div className='flex gap-1 text-sm text-darker-muted mx-2'>
                    <h2>{"2020"}</h2> {/*TODO LIST*/}
                    <h2>{"Ilmu Komputer"}</h2> {/*TODO LIST*/}
                </div>
            </div>
            <div className="my-2">
                <form>
                    <textarea placeholder="Berikan Jawaban Anda" className="w-full border border-dark-muted rounded-lg resize-none py-2 px-4 my-2" rows={10}></textarea>
                </form>
                <button className="bg-primary-yellow rounded-lg py-2 px-4 my-2">Kirim Jawaban</button> {/*TODO-LIST*/}
            </div>
        </>
    )
}