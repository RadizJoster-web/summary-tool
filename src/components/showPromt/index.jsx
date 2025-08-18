import { useState } from "react";
import prompt from "../../assets/prompt.png";

export default function ShowPrompt() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full min-h-[80vh] bg-gradient-to-b from-white to-gray-50 px-6 py-16">
      {/* Image Section */}
      <div
        onClick={() => setIsOpen(true)}
        className="relative cursor-pointer rounded-2xl shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-105"
      >
        <img
          src={prompt}
          alt="Prompt Example"
          className="w-[400px] lg:w-[500px] h-auto rounded-2xl object-cover"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-medium transition-opacity duration-300">
          Klik untuk perbesar
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center lg:text-left max-w-lg">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Penasaran dengan <span className="text-purple-600">promptnya</span>?
        </h1>
        <p className="text-gray-600 text-lg">
          Lihat langsung bagaimana prompt kami bekerja untuk menghasilkan
          ringkasan yang jelas, singkat, dan efektif.
        </p>
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative animate-zoomIn"
            onClick={(e) => e.stopPropagation()} // supaya tidak close kalau klik gambar
          >
            <img
              src={prompt}
              alt="Prompt Example"
              className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-black/60 text-white  px-4 py-2 rounded-full hover:bg-black/80 transition cursor-pointer"
            >
              <span className="text-xl">X</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
