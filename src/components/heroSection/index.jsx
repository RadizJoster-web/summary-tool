import { useEffect, useState } from "react";

import Tegline from "./HeroTagline";
import InputSection from "./summaryForm/InputForm";
import OutputSection from "./summaryForm/OutputForm";

export default function HeroSection() {
  const [summary, setSummary] = useState("");
  const [inputText, setInputText] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [summryErr, setSummryErr] = useState("Masukan text untuk dirangkum");
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
        "https://summary-tool-server-production-6825.up.railway.app/api/text/summaries";
      isUrl = false;
    } else if (inputUrl) {
      endpoint =
        "https://summary-tool-server-production-6825.up.railway.app/api/text/summaries/url";
    }

    // Simulasi fetch ke API, kamu bisa ganti ini nanti
    try {
      setLoading(true);
      const res = await fetch(endpoint, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: isUrl ? inputUrl : inputText }),
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
    <section className="text-center py-10 px-4">
      <Tegline />
      <div className="min-h-screen px-4 md:px-20 flex flex-col md:flex-row">
        <InputSection
          onSubmit={handleSummarize}
          setInputText={setInputText}
          setInputUrl={setInputUrl}
          showHeader={showHeader}
          countWords={countWords}
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
