import Card from "./ui";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-16 py-16 md:py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight">
          Make Your Next Event Unforgettable
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          From corporate conferences to destination weddings, NextHappen brings your vision to life.
        </p>
        <a href="#footer">
          <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-md shadow transition-transform duration-300 hover:scale-105">
          Get Started
          </button>
        </a>
      </div>
      <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
        {/* <img src="/images/Wedding1.png" alt="Event" className="w-full max-w-md rounded-lg shadow-xl" /> */}
        <Card/>
      </div>
    </section>
  );
}
