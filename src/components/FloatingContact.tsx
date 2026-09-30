import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FiMessageCircle,
  FiPhone,
  FiMail,
  FiMapPin,
  FiX,
} from "react-icons/fi";

const contactOptions = [
  {
    label: "WhatsApp",
    description: "Chat with us",
    href: "https://wa.me/256770952512?text=Hello%20THEHASA%20Foundation%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20programmes.",
    icon: FiMessageCircle,
    type: "external",
    className: "bg-[#25D366] hover:bg-[#20bd5a]",
  },
  {
    label: "Call Us",
    description: "+256 770 952 512",
    href: "tel:+256770952512",
    icon: FiPhone,
    type: "external",
    className: "bg-[#318EC9] hover:bg-[#277db4]",
  },
  {
    label: "Email Us",
    description: "Send us an email",
    href: "mailto:thehasafoundation@gmail.com",
    icon: FiMail,
    type: "external",
    className: "bg-[#ED1C24] hover:bg-[#d71920]",
  },
  {
    label: "Find Us",
    description: "Get directions to THEHASA",
    href: "https://www.google.com/maps/dir/?api=1&destination=THEHASA%20Foundation%2C%20Kyangwali%20Refugee%20Settlement%2C%20Kikuube%2C%20Uganda",
    icon: FiMapPin,
    type: "external",
    className: "bg-slate-800 hover:bg-slate-700",
  },
];

function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-[100] sm:bottom-8 sm:right-7">
      <div className="flex flex-col items-end gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-end gap-3"
            >
              {contactOptions.map((option, index) => {
                const Icon = option.icon;

                return (
                  <motion.a
                    key={option.label}
                    href={option.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.04,
                    }}
                    target={
                      option.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      option.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={`${option.label}: ${option.description}`}
                    className="group flex cursor-pointer items-center gap-3"
                  >
                    {/* Label */}
                    <div className="hidden rounded-xl bg-white px-4 py-2.5 text-right shadow-lg ring-1 ring-black/5 sm:block">
                      <p className="text-sm font-semibold text-gray-900">
                        {option.label}
                      </p>

                      <p className="mt-0.5 max-w-[210px] text-xs text-gray-500">
                        {option.description}
                      </p>
                    </div>

                    {/* Icon */}
                    <div
                      className={`flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full text-white shadow-lg transition-transform duration-200 group-hover:scale-105 ${option.className}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main toggle */}
        <motion.button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          whileTap={{ scale: 0.94 }}
          aria-label={isOpen ? "Close contact options" : "Open contact options"}
          aria-expanded={isOpen}
          className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#ED1C24] text-white shadow-xl shadow-red-500/25 ring-4 ring-white transition-colors duration-200 hover:bg-[#d71920] focus:outline-none focus:ring-4 focus:ring-[#ED1C24]/30 sm:h-16 sm:w-16"
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <FiX className="h-6 w-6 sm:h-7 sm:w-7" />
            ) : (
              <FiMessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
            )}
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}

export default FloatingContact;