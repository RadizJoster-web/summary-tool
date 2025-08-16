import { useState } from "react";

import { FiChevronDown } from "react-icons/fi";
import ReactCountryFlag from "react-country-flag";

export default function LanguageSelect({
  selectedLang,
  setSelectedLang,
  languages,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative sm:w-64 ">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition text-gray-700"
      >
        <div className="flex items-center gap-2">
          <ReactCountryFlag
            countryCode={selectedLang.code}
            svg
            style={{ width: "1.5em", height: "1.5em" }}
          />
          <span className="hidden sm:inline">{selectedLang.language}</span>
        </div>
        <FiChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <ul className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-auto">
          {languages.map((lang, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedLang(lang);
                setOpen(false);
              }}
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 transition ${
                selectedLang.language === lang.language
                  ? "bg-gray-50 font-medium"
                  : ""
              }`}
            >
              <ReactCountryFlag
                countryCode={lang.code}
                svg
                style={{ width: "1.5em", height: "1.5em" }}
              />
              <span className="hidden sm:inline">{lang.language}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
