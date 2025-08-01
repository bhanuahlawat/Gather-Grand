import { Mail, Phone, MapPin, LinkedinIcon, Send } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.Email.value;
    const message = form.Message.value;

    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/917078003071?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");

    setIsSubmitting(false);
  };

  return (
    
    // <section id="footer" className="py-24 px-4 bg-gradient-to-r from-[#4a4154] via-[#583e78] to-[#5709ab] text-white relative">
    <section id="footer" className="pt-20 mt-10 py-24 px-4 bg-gradient-to-br from-[#1f1c2c] via-[#2c3e50] to-[#1f1c2c] text-white relative">

      {/* Hidden Watermark */}
      <div className="absolute bottom-4 right-4 opacity-5 hover:opacity-1 transition-opacity duration-500 select-none pointer-events-none text-[2rem] md:text-[4rem] font-bold text-white tracking-widest">
        Bhanu Ahlawat
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 animate-pulse"></div>

      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Let's <span className="text-yellow-300">Elevate Your Event</span>
        </h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-white/80 animate-fade-in">
          Whether it's a conference, wedding, or concert — we’re here to bring your vision to life. Reach out and make your event extraordinary.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <Mail className="text-yellow-300" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:bhanu1322ahlawat@gmail.com" className="text-white/70 hover:text-yellow-300 transition">
                    Grand&Gather1322@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <Phone className="text-yellow-300" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+917078003071" className="text-white/70 hover:text-yellow-300 transition">
                    +91 XXXXXXX123
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <MapPin className="text-yellow-300" />
                </div>
                <div>
                  <h4 className="font-semibold">Office</h4>
                  <span className="text-white/70">Demo,India</span>
                </div>
              </div>
            </div>

            {/* <div className="pt-6">
              <h4 className="font-semibold mb-3">Let’s Connect</h4>
              <a
                href="https://www.linkedin.com/in/bhanu-ahlawat-76683923a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-yellow-300 transition"
              >
                <LinkedinIcon /> LinkedIn
              </a>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-md animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-white/20 bg-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-300"
                  placeholder="Your Name...."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  name="Email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-white/20 bg-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-300"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  name="Message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-white/20 bg-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-300"
                  placeholder="Let's make something amazing..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md flex items-center gap-2 hover:bg-yellow-300 transition duration-300"
              >
                {isSubmitting ? "Sending..." : "Send via WhatsApp"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
