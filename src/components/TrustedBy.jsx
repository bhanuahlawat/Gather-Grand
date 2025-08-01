export default function TrustedBy() {
  return (
    <section className="text-center py-16 bg-gradient-to-br from-purple-50 via-yellow-50 to-pink-50 px-4 md:px-16">
      <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Trusted by <span className="text-purple-700">100+ event organizers</span> across India
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="w-30 h-30 bg-white rounded shadow-md flex items-center justify-center">
            <img
              src={`/images/DummyLogo${i}.png`}
              alt={`Dummy Logo ${i}`}
              className="object-contain h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
