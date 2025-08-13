import { RiInputCursorMove } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";
import { GiProcessor } from "react-icons/gi";
import { GiReturnArrow } from "react-icons/gi";

export default function Explain() {
  const cards = [
    {
      title: "Langkah 1",
      desc: "Masukkan teks atau tautan yang ingin diringkas ke dalam Summary Tool.",
      gradient: "from-[#f89b29] to-[#ff0f7b]",
      icon: <RiInputCursorMove />,
    },
    {
      title: "Langkah 2",
      desc: "Pilih bahasa keluaran yang diinginkan untuk hasil ringkasan.",
      gradient: "from-[#36d1dc] to-[#5b86e5]",
      icon: <IoLanguage />,
    },
    {
      title: "Langkah 3",
      desc: "AI akan memproses teks dan mengidentifikasi poin-poin penting.",
      gradient: "from-[#8e2de2] to-[#4a00e0]",
      icon: <GiProcessor />,
    },
    {
      title: "Langkah 4",
      desc: "Hasil ringkasan yang jelas dan singkat akan ditampilkan untuk dibaca.",
      gradient: "from-[#08CB00] to-[#FFE100]",
      icon: <GiReturnArrow />,
    },
  ];

  return (
    <section className="flex flex-col items-center bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Bagaimana Cara Kerja{" "}
        <span className="text-purple-600 font-cinzel">Summary Tool</span>
        🤔?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative w-[300px] h-[200px] bg-gradient-to-tr ${card.gradient} rounded-lg flex items-center justify-center overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-lg group`}
          >
            {/* Icon */}
            <span className="text-4xl text-white transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-0">
              {card.icon}
            </span>

            {/* Content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full p-5 bg-white opacity-0 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-100">
              <p className="m-0 text-2xl font-bold text-[#333]">{card.title}</p>
              <p className="mt-2 text-sm text-[#777] leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
