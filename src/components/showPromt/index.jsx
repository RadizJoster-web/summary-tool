export default function ShowPrompt() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-30 w-full min-h-100 bg-white px-6 lg:px-40 py-10">
      {/* Text Section */}
      <div className="text-center lg:text-left max-w-lg">
        {/* Title */}
        <h1 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Penasaran dengan <span className="text-purple-600">promptnya</span>?
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 mb-10">
          Lihat langsung bagaimana prompt kami bekerja untuk menghasilkan
          ringkasan yang jelas, singkat, dan efektif.
        </p>
      </div>
    </section>
  );
}
