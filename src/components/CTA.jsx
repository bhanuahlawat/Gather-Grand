import { FaRocket } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="px-4 md:px-16 py-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
        Ready to Make Your Event Unforgettable?
      </h3>
      <p className="mb-8 text-lg md:text-xl text-indigo-100">
        Join 100+ organizers using our platform to bring their events to life.
      </p>
      <a href="#footer">
        <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-md shadow-lg inline-flex items-center gap-2 transition-transform duration-300 hover:scale-105">
        <FaRocket className="text-xl" /> Get Started for Free
      </button>
      </a>
    </section>
  );
}
