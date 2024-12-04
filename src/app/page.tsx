// pages/index.js
export default function Home() {
  return (
    <div className="grid grid-rows-6 grid-cols-4 h-screen gap-2 p-2 m-20 text-black bg-yellow-300">
      {/* Nav Section */}
      <nav className="bg-yellow-500 row-span-6 col-span-1 flex items-center justify-center">
        Nav
      </nav>

      {/* Header Section */}
      <header className="bg-yellow-400 row-span-1 col-span-3 flex items-center justify-center">
        Header
      </header>

      {/* Article Section */}
      <article className="bg-yellow-600 row-span-4 col-span-2 flex items-center justify-center">
        Article
      </article>

      {/* Ads Section */}
      <aside className="bg-yellow-500 row-span-5 col-span-1 flex items-center justify-center">
        Ads
      </aside>

      {/* Footer Section */}
      <footer className="bg-yellow-400 row-span-1 col-span-2 flex items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
