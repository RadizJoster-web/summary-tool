import { IoMdClose } from "react-icons/io";

export default function UrlForm({ setUrlForm, setInputUrl }) {
  return (
    <div className="absolute top-0 left-0 z-10 w-full h-8/10 bg-white rounded-2xl p-6 shadow-md flex justify-center items-center">
      <span className="fade-slide flex justify-center items-center gap-5">
        <input
          onChange={(e) => setInputUrl(e.target.value)}
          type="text"
          placeholder="Masukkan URL"
          className="w-80 py-2 px-4 bg-gray-100 rounded-md outline-0 border-0 shadow-md"
        />
        <button
          onClick={() => setUrlForm(false)}
          className="bg-secondary p-3 text-xl rounded-md text-black hover:opacity-90"
        >
          <IoMdClose />
        </button>
      </span>
    </div>
  );
}
