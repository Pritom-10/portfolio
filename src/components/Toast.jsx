import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react"; // যদি motion/react ইন্সটল থাকে, না হলে div ও CSS দিয়ে কাজ চালান

// যদি motion না থাকে, তাহলে tailwind এর transition ব্যবহার করে করতে পারেন।
// এখানে আমি motion/react এর মাধ্যমে সহজ করছি, কিন্তু আপনার প্রজেক্টে motion আগে থেকেই আছে (Hero section এ দেখেছি)।

const Toast = ({ message, type = "success", isVisible, onClose }) => {
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
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full text-white text-sm font-medium shadow-lg ${
            type === "success" ? "bg-emerald-600" : "bg-red-500"
          }`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
