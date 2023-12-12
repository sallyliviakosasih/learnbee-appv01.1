import Image from 'next/image'
import Header from '@/components/Header'
import Post from '@/components/Post'
import Navigation from '@/components/Navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'
export default async function Home() {
  const session = await getServerSession(authOptions);
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {
          name: true,
          stambuk: true,
          jurusan: true,
        }
      }
    }
  })
  return (
    <>
      <Header logged={session}/>
      <main>
        <div className='grid grid-cols-5'>
          <Navigation
            activePage={"homepage"}
          />
          <div className='px-5 col-span-3'>
            <div className='flex px-6 py-5 bg-cover relative items-center' style={{backgroundImage: 'url(background/bg1.png)'}}>
              <h1 className='text-white font-semibold text-xl'>Kesulitan mengerjakan tugas?</h1>
              <a href='/add-question' className='flex absolute right-0 mx-10 px-4 py-2 bg-primary-yellow rounded-full'>
                <Image
                  src={'/icons/addQuestionIcon.svg'}
                  alt='Ikon Tambah Pertanyaan'
                  width={24}
                  height={24}
                />
                <h2 className='text-contrast font-medium mx-2'>Ajukan pertanyaan</h2>
              </a>
            </div>
            {
              posts.map((post) => (
                <>
                <div key={post.id}>
                  <Post
                    postInfo = {post}
                  />   
                </div>
                </>
              ))
            }
          </div>
        </div>
      </main>
    </>
  )
}
