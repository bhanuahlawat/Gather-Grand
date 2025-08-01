import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Wedding Planner",
    message:
      "Gather & Grand made our big day seamless and magical. From venue to lighting, everything was perfect!",
  },
  {
    name: "Sana Verma",
    role: "Corporate Event Organizer",
    message:
      "I planned a 500-person conference using Gather & Grand. It was smooth, efficient, and stress-free.",
  },
  {
    name: "Karan Malhotra",
    role: "Birthday Party Coordinator",
    message:
      "Loved the vendor coordination and real-time updates. It really helped me stay on track!",
  },
  {
    name: "Neha Sharma",
    role: "Fashion Show Host",
    message:
      "They took care of every detail, and the lighting & audio setup were top-notch. Highly recommend G&G!",
  },
  {
    name: "Rohit Kapoor",
    role: "College Fest Organizer",
    message:
      "Organizing our annual fest was easier with Gathers & Grand. Reliable team and fast responses!",
  },
  {
    name: "Ishita Raj",
    role: "Engagement Planner",
    message:
      "From decorations to guest management, everything was classy and well-executed. Truly memorable!",
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 md:px-16 py-20 bg-white" id="testimonials">
      <motion.h3
        className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What Our Clients Say
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-br from-purple-50 to-yellow-50 p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 italic mb-4">“{t.message}”</p>
            <div className="text-indigo-600 font-semibold">{t.name}</div>
            <div className="text-gray-500 text-sm">{t.role}</div>
            <div className="flex text-yellow-400 mt-2">
              {[...Array(5)].map((_, idx) => (
                <FaStar key={idx} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
