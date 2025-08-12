import StickUseComputer from "../../assets/stick use computer.png";

export default function About() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-40 py-10 ">
      {/* Left Section */}
      <div className="flex flex-col gap-6 max-w-xl">
        <h1 className="text-4xl lg:text-4xl font-semibold leading-tight text-gray-900">
          Dengan{" "}
          <span className="font-cinzel text-primary hover:scale-105 duration-500">
            Summary Tool
          </span>
          ,<br />
          Membuat Pengalaman Membaca Anda Lebih{" "}
          <span className="font-bold text-secondary">Cepat & Efektif</span>
        </h1>

        <p className="text-gray-600 text-lg">
          Alat kami memanfaatkan teknologi{" "}
          <span className="font-semibold">Gemini-AI</span> untuk merangkum teks
          & web. Prompt kami sudah di desain untuk memberikan ringkasan yang
          jelas dan mudah dipahami
        </p>

        {/* Button */}
        <button className="bg-black text-white hover:bg-gray-900 w-50 py-3 rounded-full hover:opacity-90 cursor-pointer active:scale-90 transition-all duration-200">
          Mulai Ringkasan
        </button>
      </div>

      {/* Right Section */}
      <div className="relative mt-10 lg:mt-0 flex justify-center">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <img
            src={StickUseComputer}
            alt="Stick Use Computer"
            className="w-64 lg:w-100 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
