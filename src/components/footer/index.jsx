export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-2 md:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo / Brand */}
        <h1 className="text-xl font-cinzel text-primary hover:scale-105 duration-500 cursor-default">
          Summary Tool
        </h1>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Summary Tool. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
