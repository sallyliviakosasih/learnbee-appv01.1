import Header from "@/components/Header"
import QuestionForm from "@/components/QuestionForm"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


export default async function addQuestion() {
    const session = await getServerSession(authOptions);
    return (
        <>
        <Header logged={session}/>
        <main>
            <div className="px-36 py-12">
                <h1 className="py-8 font-bold text-2xl">Ajukan Pertanyaan</h1>
                <div className="grid grid-cols-3 gap-5">
                    <QuestionForm/>
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