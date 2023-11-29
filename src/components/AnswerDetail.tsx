import Image from "next/image"
export default function AnswerDetail(idAnswer:any) {
    return(
        <>
        <div className='border border-dark-muted px-6 py-5 my-5'>
            <div className='flex gap-5' id='headerQuestin'>
                <div className='' id='questionRates'>
                    <button>
                    <Image
                        src={'/icons/upvoteIcon.svg'}
                        alt='Ikon vote jawaban'
                        width={29}
                        height={29}
                    />
                    </button> {/*TODO-LIST*/}
                    <h1 className='text-center text-lg'>{100}</h1> {/*TODO LIST*/}
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
            <div className='py-4' id='mainAnswer'>
                <h1 className='font-bold text-lg'>{"Berikut adalah penyelesaiannya"}</h1> {/*TODO LIST*/}
                {/*TODO LIST : Jika ada Gambar maka tampilkan bagian ini, Jika tidak maka hilangkan bagian ini*/} 
                <Image className='mx-auto my-3'
                    src={'/sample/sample1.png'}
                    alt='Gambar Jawaban'
                    width={820}
                    height={320}
                />
                {/*TODO LIST : Jika ada Konteks Maka tampilkan bagian ini, jika tidak maka hilangkan*/}
                <h2>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo sapien eu massa sollicitudin, non convallis lectus auctor. Curabitur gravida eros ut lectus consequat, eget sollicitudin arcu tristique. Cras ornare eros non mi gravida, vitae consequat justo fermentum. Mauris facilisis turpis sed dolor lobortis, non tristique urna vestibulum. Pellentesque vitae justo quis augue commodo tempor. Quisque facilisis lacus eu tellus posuere, a convallis augue imperdiet. Mauris mollis neque eu lorem tempus, non commodo erat consequat. Cras tincidunt lacinia turpis, ut pellentesque metus commodo eu. Nulla facilisi."}</h2>
            </div>
        </div>
        </>
    )
}