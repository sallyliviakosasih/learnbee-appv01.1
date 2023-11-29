import Header from "@/components/Header"
import QuestionForm from "@/components/QuestionForm"
export default function addQuestion() {
    return (
        <>
        <Header
            isLogged={true} //TODO-LIST : Halaman ini hanya dapat diakses ketika sudah melakukan LOGIN
        />
        <main>
            <div className="px-36 py-12">
                <h1 className="py-8 font-bold text-2xl">Ajukan Pertanyaan</h1>
                <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-2 border-2 border-dark-muted rounded-lg px-10 py-7">
                        <QuestionForm/>
                    </div>
                    <section>
                        <div className="bg-[#eceef7] p-6 rounded-md ">
                            <div className="text-[#637c8a] h-fit">
                                    <div className='p-2  font-semibold'>Menulis pertanyaan yang baik &amp; benar</div>
                                    <div className='p-2'>Sebelum mengajukan pertanyaan, ingatlah untuk:</div>
                                    <ul className="list-disc ml-6">
                                        <li>Bersikap yang sopan</li>
                                        <li>Cari pertanyaan sebelum mengajukan pertanyaan</li>
                                        <li>Ringkas masalah Anda dalam satu judul</li>
                                        <li>Deskripsikan masalah Anda lebih detail</li>
                                        <li>Tambahakan tag topik yang berhubungan</li>
                                    </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
        </>
    )
}