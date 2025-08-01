// src/components/Pricing.jsx
import { FaCheckCircle } from "react-icons/fa";

const pricingPlans = [
  {
    title: "Wedding Bliss",
    price: "₹49,999",
    features: [
      "Venue Decoration",
      "Catering (100 Guests)",
      "Photography",
      "Live Music",
    ],
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Corporate Elite",
    price: "₹39,999",
    features: [
      "Conference Setup",
      "Snacks & Lunch",
      "Tech Support",
      "Host/Anchor",
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Birthday Bash",
    price: "₹19,999",
    features: [
      "Theme Decoration",
      "Cake & Snacks",
      "Games & Activities",
      "Gift Bags",
    ],
    color: "from-green-500 to-emerald-500",
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white text-center" id="pricing">
      <h2 className="text-4xl font-extrabold mb-12 text-gray-800">Our Pricing</h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {pricingPlans.map((plan, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${plan.color} text-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 w-80 p-6`}
          >
            <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
            <p className="text-4xl font-extrabold mb-6">{plan.price}</p>
            <ul className="text-left space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaCheckCircle className="text-yellow-300" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
