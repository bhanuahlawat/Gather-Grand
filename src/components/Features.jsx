import { motion } from "framer-motion";

const features = [
  { title: "All-In-One Event Dashboard", icon: "📊" },
  { title: "Vendor Management", icon: "📦" },
  { title: "Real-Time Collaboration", icon: "🤝" },
  { title: "Budget Estimator", icon: "💰" },
  { title: "Guest List Manager", icon: "📝" },
  { title: "Live Analytics", icon: "📈" },
];

export default function FeaturesCarousel() {
  return (
    <section
      className="pt-40 px-4 md:px-16 py-16 bg-gradient-to-br from-white via-purple-50 to-yellow-50 mt-20"
      id="features"
    >
      <h3 className="text-3xl mt-70px md:text-4xl font-extrabold text-center text-gray-800 mb-12">
        Feature Highlights
      </h3>

      <div className="grid grid-cols-2 md:flex md:p-10 md:gap-10 gap-6 justify-items-center">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="w-full max-w-[160px] sm:max-w-[180px] bg-white p-6 rounded-xl shadow hover:shadow-2xl transition-all text-center border-t-4 border-indigo-500"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h4 className="text-sm md:text-base font-semibold text-gray-800">
              {feature.title}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
