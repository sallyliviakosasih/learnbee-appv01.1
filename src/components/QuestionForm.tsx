'use client'
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
export default function QuestionForm() {
    const [tags, setTags] = useState(['']);
    const [inputTag, setInputTag] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();

    const handleInputTag = (event: any) => {
        const {value} = event.target;
        setInputTag(value);
    }
    const handleKeyInputTag = (event:any) => {
        const {key} = event;
        const {value} = event.target;
        if (key === 'Enter'){
            event.preventDefault();
            setInputTag(value);
            setTags(prevState => [...prevState, inputTag]);
            setInputTag('');
        }
    }
    const handleDeleteTag = (index:any) => {
        setTags(prevState => prevState.filter((tags, i) => i !==index ))
    }

    const handleInputTitle = (event:any) => {
        const {value} = event.target;
        setTitle(value);
    }
    const handleInputContent = (event:any) => {
        const {value} = event.target;
        setContent(value);
    }

    const {data: session} = useSession();
    const user = session?.user;

    const handleSubmit = async () => {
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify({
                title : title,
                content: content, 
                tags: tags,
            })
        });
        if (response.ok) {
            alert("Pertanyaan berhasil ditambahkan");
            router.push('/');
        } else {
            alert("Pertanyaan gagal ditambahkan");
            router.refresh();
        }
    }
    return (
        <>
        <div className="col-span-2 border-2 border-dark-muted rounded-lg px-10 py-7">
        <form className="">
            <label className="block">Judul</label>
            <input type="text" placeholder="Masukan Judul" className="w-full border border-dark-muted py-2 px-4 my-2 rounded-lg" onChange={handleInputTitle} required></input> {/*TODO-LIST*/}
            <label className="block my-2">Detail Pertanyaan</label>
            <textarea placeholder="Masukan Detail Pertanyaan" className="w-full border border-dark-muted py-2 px-4 rounded-lg resize-none" rows={15} required onChange={handleInputContent}></textarea> {/*TODO-LIST*/}
            <label className="block my-2">Tag</label>
            {/*TODO-LIST*/}
            <div className="">
                <input type="text" className="w-full border border-dark-muted py-2 px-4 rounded-lg" placeholder="Masukan Tags (maksimal 5 tag)" onChange={handleInputTag} onKeyDown={handleKeyInputTag}></input>
                <div className="flex gap-4 my-2 items-center">
                    {
                        tags.map((tag, index) => {
                            if (tag != '') {
                                return(
                                    <div className="bg-grey rounded-lg py-2 px-2 inline-flex" key={tag}>
                                        <button className="mx-1" onClick={() => handleDeleteTag(index)}>x</button>
                                        <h2 className="text-muted-grey mx-2">{tag}</h2>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </form>
        <button className="bg-primary-yellow rounded-lg py-2 px-4 my-2" onClick={handleSubmit}>Tambah Pertanyaan</button> {/*TODO-LIST*/}              
        </div>
        </>
    )
}