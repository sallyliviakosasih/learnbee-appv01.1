"use client"
import { useState } from "react";

export default function QuestionForm() {
    const [tags, setTags] = useState(['']);
    const [inputTag, setInputTag] = useState('');

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

    return (
        <>
        <form className="">
            <label className="block">Judul</label>
            <input type="text" placeholder="Masukan Judul" className="w-full border border-dark-muted py-2 px-4 my-2 rounded-lg" required></input> {/*TODO-LIST*/}
            <label className="block my-2">Detail Pertanyaan</label>
            <textarea placeholder="Masukan Detail Pertanyaan" className="w-full border border-dark-muted py-2 px-4 rounded-lg resize-none" rows={15} required></textarea> {/*TODO-LIST*/}
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
        <button className="bg-primary-yellow rounded-lg py-2 px-4 my-2">Tambah Pertanyaan</button> {/*TODO-LIST*/}
        </>
    )
}