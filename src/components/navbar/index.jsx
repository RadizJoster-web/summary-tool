export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-20 bg-transparent">
      <h1 className="text-3xl font-cinzel text-primary hover:scale-110 duration-200 cursor-default">
        Summry Tool
      </h1>
      <button className="border border-[var(--color-primary)] text-[var(--color-primary)] px-4 py-2 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition">
        Explore Now
      </button>
    </nav>
  );
}
