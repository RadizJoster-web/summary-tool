import { useState } from "react";

import { IoCopyOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

export default function OutputForm({ summary, summryErr, loading }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const countWords = () => {
    return summary.trim() === "" ? 0 : summary.trim().split(/\s+/).length;
  };

  return (
    <div className="w-full lg:w-1/2 p-4">
      <div className="relative bg-white rounded-2xl p-6 shadow-md h-[450px]">
        <div className="flex justify-between mb-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-secondary text-black  px-4 py-2 rounded-full text-sm hover:opacity-90 cursor-pointer"
          >
            {copied ? <FaCheck /> : <IoCopyOutline />}
            {copied ? "Copied!" : "Copy"}
          </button>
          <span className=" text-sm text-gray-400">{countWords()} kata</span>
        </div>

        <div className="overflow-y-auto h-[310px] text-gray-700 text-lg text-start">
          {summary ? (
            <div
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{
                __html: summary
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // bold markdown
                  .replace(/\n/g, "<br/>") // enter jadi <br>
                  .replace(/\*/g, "●"),
              }}
            />
          ) : (
            <p className="text-gray-400">{summryErr}</p>
          )}
        </div>

        {loading && (
          <div className=" absolute top-19 inset-0 flex flex-col items-start justify-start gap-5 bg-white rounded-2xl pl-5">
            <span className="loader w-100 h-10"></span>
            <span className="loader w-80 h-10"></span>
            <span className="loader w-60 h-10"></span>
            <span className="loader w-100 h-10"></span>
            <span className="loader w-50 h-10"></span>
          </div>
        )}
      </div>
    </div>
  );
}
