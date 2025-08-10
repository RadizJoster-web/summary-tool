import { useState } from "react";
import UrlForm from "./UrlForm";

import { IoMdLink } from "react-icons/io";

export default function InputForm({
  onSubmit,
  setInputText,
  setInputUrl,
  showHeader,
  countWords,
}) {
  // State untuk mengontrol tampilan form URL
  const [urlForm, setUrlForm] = useState(false);

  return (
    <div className="w-full md:w-1/2 p-4 ">
      <div className="relative h-[450px] bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
        <div>
          {showHeader && (
            <div className="mb-4 flex items-center gap-4">
              <span className="text-gray-500 font-semibold">
                Mulai Mengetik atau
              </span>
              <button
                onClick={() => setUrlForm(true)}
                className="flex items-center gap-2 bg-secondary text-black  px-4 py-2 rounded-full text-sm hover:opacity-90 cursor-pointer"
              >
                <IoMdLink className="text-lg" />
                Web URL
              </button>
            </div>
          )}

          <textarea
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Masukkan teks paragraf..."
            className="w-full h-[280px] bg-transparent resize-none  outline-none text-gray-700 placeholder:text-gray-300 text-lg"
          />
        </div>

        {urlForm && (
          <UrlForm setUrlForm={setUrlForm} setInputUrl={setInputUrl} />
        )}

        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-400">{countWords()} kata</span>
          <button
            onClick={(e) => onSubmit(e)}
            className="bg-black text-white hover:bg-gray-900 px-6 py-2 rounded-full hover:opacity-90 cursor-pointer active:scale-90 transition-all duration-200"
          >
            Mulai Ringkasan
          </button>
        </div>
      </div>
    </div>
  );
}
