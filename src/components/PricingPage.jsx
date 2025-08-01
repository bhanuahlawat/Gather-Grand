import { FaCheckCircle, FaRing, FaBriefcase, FaBirthdayCake, FaStar, FaFire, FaRocket } from "react-icons/fa";

const pricingPlans = [
  {
    title: "Wedding Bliss",
    price: "₹49,999",
    icon: <FaRing size={30} />,
    features: ["Venue Decoration", "Catering (100 Guests)", "Photography", "Live Music"],
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Corporate Elite",
    price: "₹39,999",
    icon: <FaBriefcase size={30} />,
    features: ["Conference Setup", "Snacks & Lunch", "Tech Support", "Host/Anchor"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Birthday Bash",
    price: "₹19,999",
    icon: <FaBirthdayCake size={30} />,
    features: ["Theme Decoration", "Cake & Snacks", "Games & Activities", "Gift Bags"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Festival Fiesta",
    price: "₹29,999",
    icon: <FaFire size={30} />,
    features: ["Stage Setup", "Light & Sound", "Cultural Performances", "Festival Branding"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Product Launch Pro",
    price: "₹59,999",
    icon: <FaRocket size={30} />,
    features: ["Venue Branding", "AV Setup", "Media Coverage", "Professional Host"],
    color: "from-cyan-500 to-blue-600",
    highlight: true,
  },
  {
    title: "Luxury Wedding Premium",
    price: "₹1,49,999",
    icon: <FaStar size={30} />,
    features: ["Destination Venue", "Luxury Catering (200 Guests)", "Cinematography", "Fireworks & Entry Effects"],
    color: "from-fuchsia-600 to-rose-500",
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
            className={`relative bg-white bg-opacity-90 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl w-80 p-6 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl`}
          >
            {/* Highlight Badge */}
            {plan.highlight && (
              <span className="absolute top-3 right-3 bg-yellow-400 text-gray-800 text-xs font-bold px-2 py-1 rounded">
                MOST POPULAR
              </span>
            )}

            {/* Gradient Top Border */}
            <div className={`absolute top-0 left-0 w-full h-2 rounded-t-xl bg-gradient-to-r ${plan.color}`} />

            {/* Icon + Title */}
            <div className="mb-4 text-gray-800 flex items-center justify-center gap-2 text-xl font-bold">
              {plan.icon} {plan.title}
            </div>

            {/* Price */}
            <p className="text-3xl font-extrabold mb-6 text-indigo-600">{plan.price}</p>

            {/* Features List */}
            <ul className="text-left space-y-2 text-gray-700">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
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
