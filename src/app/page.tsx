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

  const article_preview = ("AAAA ").repeat(Number(numOfWords));

  return (
    <div id="full_page" className="p-[0] m-[0] width-full flex-col height-full space-y-[2vh]">
      <div id="heading" className="border-black border-[2px] rounded-md w-[750px] max-w-[95%] mx-auto mt-[2%] py-[0.5%]">
        <h1 className="text-center text-5xl">Welcome to AIrticle</h1>
      </div>
      <div id="working_area" className="flex-col w-[750px] max-w-[95%] mx-auto h-[60vh] sm:h-[70vh]">
        <label htmlFor="notes_input" className="block text-xl h-auto">Write your notes here: </label>
        <div className="block w-[100%] h-[91%] focus:outline-none resize-none border border-black border-[2px] rounded-md">
          <textarea 
            id="notes_input" 
            className="w-[96%] m-[2%] h-[96%] focus:outline-none resize-none"
            placeholder="Write your notes here..."
            rows={20}
          >
          </textarea>
        </div>
      </div>
      <div id="buttons"className="flex justify-around w-[750px] max-w-[95%] mx-auto h-[10vh]">
        <button 
          className="mr-[5px] border-black border-[2px] w-[100%] rounded-md border"
          onClick={() => setShowPreview(true)}
        ><span className="text-xl">Preview Article</span></button>
        <button className="ml-[5px] border-black border-[2px] w-[100%] rounded-md border"><span className="text-xl">Analyze Notes</span></button>
      </div>
      <div className={`rounded-md w-[750px] max-w-[95%] mx-auto h-[84vh] border-black border-[3px] fixed top-[12vh] left-1/2 transform -translate-x-1/2 ${showPreview ? "visible" : "invisible"} bg-white z-2 flex-col space-y-[1%]`} >
        <div className="he-[1%]"></div>
        <div className="flex justify-between h-[6%] content-center w-[90%] mx-[5%]">
          <div className="flex justify-left rounded-md w-[85%]">
            <label htmlFor="num_of_words" className="my-auto mr-[5%] whitespace-nowrap">Number of Words: </label>
            <input 
              id="num_of_words" 
              type="number" 
              onChange={handleChangeNumOfWords}
              value={numOfWords}
              min={"0"}
              max={"1000"}
            ></input>
          </div>
          <button 
            onClick={() => setShowPreview(false)}
            className="rounded-md border border-black border-[1px] px-[1%] w-[15%]"
          >Exit</button>
        </div>
        <article className="h-[80%] w-[90%] mx-[5%] border border-black border-[1px] rounded-md break-words overflow-y-auto">
          <p>Here is a preview article: {article_preview}</p>
        </article>
        <button className="rounded-md border-black border-[2px] w-[90%] mx-[5%] h-[8%]"><span className="text-xl">Publish</span></button>
      </div>
    </div>
  );
}
