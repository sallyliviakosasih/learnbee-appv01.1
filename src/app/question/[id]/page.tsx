import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import QuestionDetail from "@/components/QuestionDetail";
import AnswerDetail from "@/components/AnswerDetail";

export default function Question({params}: {params: {id: String}})  {
    return( 
        <>
            {/* <h1>{params.id} => untuk akses id yang dikirim dari URL</h1> */}
            <Header
                isLogged = {true}
            />
            <main>
                <div className='grid grid-cols-5'>
                    <Navigation
                        activePage=""
                    />
                    <div className="px-5 col-span-3">
                        <QuestionDetail 
                            idQuestion="1" /*TODO-LIST: ubah nilai id berdasarkan id yang dikirimkan URL*/
                        />
                        <h1 className="my-8 font-extrabold text-xl">Jawaban (1)</h1> {/*TODO-LIST : ubah nilai berdasarkan jumlah jawaban yang tersedia pada id pertanyaan tersebut*/}
                        {/*TODO-LIST: Tampilkan Jawaban-jawaban berdasarkan id jawaban yang ada dari id pertanyaan yang ditampilkan*/}
                        <AnswerDetail
                            idAnswer="id"
                        />
                    </div>
                </div>
            </main>
        </>
    )
}