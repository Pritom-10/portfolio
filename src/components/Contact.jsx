import { useState, useEffect, useCallback } from "react"; // useEffect, useCallback যোগ করেছি
import { motion, AnimatePresence } from "motion/react"; // AnimatePresence যোগ করেছি
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

// টোস্টের জন্য ছোট একটি কম্পোনেন্ট (একই ফাইলে রাখলাম, সরলতার জন্য)
const Toast = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -30, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -30, x: "-50%" }}
          transition={{ duration: 0.3 }}
          className={`fixed top-6 left-1/2 z-50 px-6 py-3 rounded-full text-white text-sm font-medium shadow-lg ${
            type === "success" ? "bg-emerald-600" : "bg-red-500"
          }`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Contact = () => {
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = useCallback((message, type = "success") => {
    setToast({ show: true, message, type });
  }, []);

  const closeToast = useCallback(() => {
    setToast({ show: false, message: "", type: "success" });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "4f18c8b5-5f21-40a8-9b51-8175a896825a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        showToast(res.message || "Message sent successfully!", "success");
        event.target.reset();
      } else {
        showToast(
          res.message || "Something went wrong. Please try again.",
          "error",
        );
      }
    } catch (error) {
      showToast("Network error. Please check your connection.", "error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300"
    >
      {/* টোস্ট এখানে রেন্ডার হচ্ছে */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={closeToast}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">
              Let's build something{" "}
              <span className="text-emerald-600 italic">amazing</span> together.
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-900 rounded-xl flex items-center justify-center text-emerald-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">
                    Email Me
                  </p>
                  <a
                    href="mailto:pritomshiro@gmail.com"
                    className="text-lg font-semibold text-zinc-900 dark:text-white hover:text-emerald-600 transition-colors"
                  >
                    pritomshiro@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-900 rounded-xl flex items-center justify-center text-blue-600">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">
                    GitHub
                  </p>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-zinc-900 dark:text-white hover:text-emerald-600 transition-colors"
                  >
                    github.com/pritom
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-900 rounded-xl flex items-center justify-center text-blue-500">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">
                    LinkedIn
                  </p>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-zinc-900 dark:text-white hover:text-emerald-600 transition-colors"
                  >
                    linkedin.com/in/pritom
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-900 rounded-xl flex items-center justify-center text-amber-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="text-lg font-semibold text-zinc-900 dark:text-white">
                    Chattagram, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-50 dark:bg-zinc-900 p-8 sm:p-12 rounded-3xl border border-zinc-100 dark:border-zinc-800"
          >
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-zinc-900 dark:text-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-zinc-900 dark:text-white transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-zinc-900 dark:text-white transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  name="message"
                  rows={5}
                  className="w-full px-6 py-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-zinc-900 dark:text-white transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-200 dark:shadow-none cursor-pointer"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
