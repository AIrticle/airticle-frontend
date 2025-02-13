"use client"
import { useState } from "react";


export default function Home() {

  const [showPreview, setShowPreview] = useState(false)
  const [numOfWords, setNumOfWords] = useState("50")

  function handleChangeNumOfWords(event : React.ChangeEvent<HTMLInputElement>){
    const input = event.target.value;
    const numericInput = input.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    setNumOfWords(numericInput);
  }

  const article_preview = ("A").repeat(33 * Number(numOfWords));

  return (
    <div id="full_page" className="p-[0] m-[0] width-full m-[10px] flex-col">
      <div id="heading" className="border-black border-[2px] rounded-md w-[750px] max-w-[95%] my-[10px] mx-auto">
        <h1 className="text-center text-5xl">Welcome to AIrticle</h1>
      </div>
      <div id="working_area" className="max-w-[95%] w-[750px] my-[10px] mx-auto flex-col">
        <label htmlFor="notes_input" className="block text-xl my-[5px]">Write your notes here: </label>
        <textarea 
          id="notes_input" 
          className="block w-[100%] rounded-md border border-black border-[2px] focus:ring-blue-500 focus:border-blue-300 resize-none"
          placeholder="Write your notes here..."
          rows={20}
        >
        </textarea>
        <div id="buttons"className="flex justify-around">
          <button 
            className="mx-[5px] my-[3px] border-black border-[2px] w-[100%] rounded-md border"
            onClick={() => setShowPreview(true)}
          >Preview Article</button>
          <button className="mx-[5px] my-[3px] border-black border-[2px] w-[100%] rounded-md border">Generate Article</button>
        </div>
        <div className={`rounded-md w-[50vw] h-[85vh] border-black border-[3px] fixed top-[10vh] left-1/2 transform -translate-x-1/2 ${showPreview ? "visible" : "invisible"} bg-white z-2 flex-col space-y-[1%]`} >
          <div className="he-[1%]"></div>
          <div className="flex justify-between h-[6%] content-center w-[90%] mx-[5%]">
            <div className="flex justify-left rounded-md w-[50%]">
              <label htmlFor="num_of_words" className="my-auto mr-[5%] whitespace-nowrap">Number of Words: </label>
              <input 
                id="num_of_words" 
                type="Number" 
                className="w-[70%] max-w-[10vw]"
                onChange={handleChangeNumOfWords}
                value={numOfWords}
                min={0}
                max={1000}
              ></input>
            </div>
            <button 
              onClick={() => setShowPreview(false)}
              className="rounded-md border border-black border-[1px] px-[5px]"
            >Exit</button>
          </div>
          <article className="h-[83%] w-[90%] mx-[5%] border border-black border-[1px] rounded-md break-words overflow-y-auto">
            <p>Here is a preview article: {article_preview}</p>
          </article>
          <button className="rounded-md border-black border-[2px] w-[90%] mx-[5%] h-[5%]">Publish</button>
        </div>
      </div>
    </div>
  );
}
