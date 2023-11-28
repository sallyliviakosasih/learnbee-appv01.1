import Image from "next/image"
export default function LoginForm({formAction}:any) {
    const handleInputEmail = () =>{}; //TODO-LIST
    const handleInputPassword = () => {}; //TODO-LIST
    const handleSubmitLogin = () => {}; //TODO-LIST

    return(
        <>
      <div className='bg-white relative rounded-lg p-12 w-4/12'>
        <button onClick={formAction} className="font-semibold">X</button>
        <Image className='mx-auto'
          src={'/logo/beeOnly.svg'}
          alt='Logo Learn Bee'
          width={67}
          height={68} 
        />
        <Image className='mx-auto my-2'
          src={'/logo/textOnly.svg'}
          alt='Logo 2 Learn Bee'
          width={139}
          height={23} />
        <h2 className='text-center font-serif font-medium text-contrast text-3xl my-4'>Masuk</h2>

        <form className='my-5'>
          <label className='block my-2'>Email USU Mahasiswa</label>
          <input type='text' className='w-full border-b-2' onChange={handleInputEmail}></input>
          <label className='block my-2'>Kata Sandi</label>
          <input type='text' className='w-full border-b-2' onChange={handleInputPassword}></input>
        </form>
        <button className='bg-primary-yellow font-bold text-contrast px-4 py-2 rounded-full block mx-auto my-16' onClick={handleSubmitLogin}>Masuk</button>
      </div> 
    </>
    )
}