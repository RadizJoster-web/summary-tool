import { useEffect, useState } from "react";

import Tegline from "./HeroTagline";
import InputSection from "./summaryForm/InputForm";
import OutputSection from "./summaryForm/OutputForm";

import languages from "../../data/languages";

export default function HeroSection() {
  const [summary, setSummary] = useState("");
  const [inputText, setInputText] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [summryErr, setSummryErr] = useState("Masukan text untuk dirangkum");
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [loading, setLoading] = useState(false);

  // Menghitung jumlah kata dalam state summary
  const countWords = () => {
    return inputText.trim() === "" ? 0 : inputText.trim().split(/\s+/).length;
  };

  // Menampilkan atau menyembunyikan header berdasarkan apakah ada nilai di summary
  const [showHeader, setShowHeader] = useState(true);
  useEffect(() => {
    if (inputText) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [inputText]);

  const handleSummarize = async (e) => {
    e.preventDefault();

    let endpoint = "";
    let isUrl = true;

    if (inputText) {
      endpoint =
        "https://summary-tool-server-production.up.railway.app/api/text/summaries";
      isUrl = false;
    } else if (inputUrl) {
      endpoint =
        "https://summary-tool-server-production.up.railway.app/api/text/summaries/url";
    }

    // Simulasi fetch ke API, kamu bisa ganti ini nanti
    try {
      setLoading(true);
      const res = await fetch(endpoint, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: isUrl ? inputUrl : inputText,
          lang: selectedLang.language,
        }),
      });

      const data = await res.json();

      if (data.success === true) {
        setSummary(data.data);
        setSummryErr("");
      } else {
        setSummary("");
        setSummryErr(data.message);
      }
    } catch (error) {
      console.error("Error summarizing text:", error);
      setSummryErr("Terjadi kesalahan saat merangkum teks. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center flex-col text-center pb-10 pt-20 xl:px-40 bg-gradient-to-br from-[#f8f0ff] to-[#f5ebff]">
      <Tegline />
      <div className="w-full flex flex-col lg:flex-row items-center justify-center">
        <InputSection
          onSubmit={handleSummarize}
          setInputText={setInputText}
          setInputUrl={setInputUrl}
          showHeader={showHeader}
          countWords={countWords}
          selectedLang={selectedLang}
          setSelectedLang={setSelectedLang}
          languages={languages}
        />
        <OutputSection
          summary={summary}
          summryErr={summryErr}
          loading={loading}
        />
      </div>
    </section>
  );
}
