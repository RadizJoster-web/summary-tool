export default function Navbar() {
  return (
    <nav className="absolute ttop-0 left-0 flex items-center justify-between w-full py-4 px-2 md:px-20 bg-transparent">
      <h1 className="text-3xl font-cinzel text-primary hover:scale-105 duration-500 cursor-default">
        Summry Tool
      </h1>
      <button className="border border-[var(--color-primary)] text-[var(--color-primary)] px-4 py-2 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition">
        Explore Now
      </button>
    </nav>
  );
}
