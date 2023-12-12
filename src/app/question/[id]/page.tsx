import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import QuestionDetail from "@/components/QuestionDetail";
import AnswerDetail from "@/components/AnswerDetail";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";

export default async function Question({params}: {params: {id: String}})  {
    const session = await getServerSession(authOptions);
    const posts = await prisma.post.findUnique({
        where: { id: params.id.toString() },
        include: {
            author: {
                select:{
                    name: true,
                    stambuk: true,
                    jurusan: true,
                }
            },
            comments: {
                select: {
                    id: true,
                }
            }
        }
    });
    const comments = await prisma.comment.findMany({
        where: {postId : posts?.id.toString()},
        include: {
            author: {
                select: {
                    name:true,
                    stambuk: true,
                    jurusan: true,
                }
            }
        }
    });
    console.log(comments);
    return( 
        <>
            {/* <h1>{params.id} => untuk akses id yang dikirim dari URL</h1> */}
            <Header
                logged={session}
            />
            <main>
                <div className='grid grid-cols-5'>
                    <Navigation
                        activePage=""
                    />
                    <div className="px-5 col-span-3">
                        <QuestionDetail 
                            postInfo={posts} /*TODO-LIST: ubah nilai id berdasarkan id yang dikirimkan URL*/
                        />
                        <h1 className="my-8 font-extrabold text-xl">Jawaban {posts?.comments.length}</h1>
                        {comments.map((comment) => 
                            <div key={comment.id}>
                                <AnswerDetail
                                    postInfo = {comment}
                                />
                            </div>
                        )}
                        {/*TODO-LIST: Tampilkan Jawaban-jawaban berdasarkan id jawaban yang ada dari id pertanyaan yang ditampilkan*/}
                        
                    </div>
                </div>
            </main>
        </>
    )
}