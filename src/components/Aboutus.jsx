import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-br pt-50 mt-20 from-purple-100 to-pink-100 py-20 px-6 md:px-20" id="about">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold mb-6 text-purple-800 drop-shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          About Gathers & Grand
        </motion.h2>

        <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
          At <strong className="text-purple-700">Gathers & Grand</strong>, we transform dreams into reality.
          Whether it’s an intimate gathering or a grand celebration, we craft each event with precision, passion, and personality.
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
          Our team of creative designers and professional planners ensure that every detail reflects your vision and story.
        </p>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          With <span className="font-semibold text-purple-700">creativity, elegance, and excellence</span> at our core,
          we make your moments not just memorable — but truly magical.
        </p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
        </motion.div>
      </motion.div>
    </section>
  );
}
