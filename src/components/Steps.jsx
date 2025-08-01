export default function Steps() {
  const steps = [
    {
      text: "Choose Your Event Type",
      image: "/images/step1.png",
    },
    {
      text: "Pick Solutions (Venue, Catering, Production, etc.)",
      image: "/images/step2.png",
    },
    {
      text: "Customize & Confirm",
      image: "/images/step3.png",
    },
    {
      text: "Sit Back & Relax",
      image: "/images/step4.png",
    },
  ];

  return (
    <section className="px-4 md:px-16 py-16 bg-gradient-to-br from-yellow-50 via-purple-50 to-white" id="solutions">
      <h3 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mt-25 mb-30">
        How It Works
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all border-t-4 border-indigo-500"
          >
            <img src={step.image} alt={`Step ${index + 1}`} className="w-16 h-16 mx-auto mb-4" />
            <p className="text-gray-700 font-medium text-base md:text-lg leading-relaxed">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
