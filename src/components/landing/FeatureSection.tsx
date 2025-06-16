"use client";
import { motion } from "framer-motion";
import { FEATURES } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features">
    <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="mt-28 grid grid-cols-1 min-[900px]:grid-cols-3 gap-8 w-full"
    >
      {FEATURES.map((feature, index) => (
        <motion.div 
          key={index}
              initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true, amount: 0.3 }}
     transition={{ delay: index * 0.1 + 0.2 }}
          className="bg-white/80 backdrop-blur-sm border border-purple-100 rounded-xl p-6 text-left hover:shadow-md transition-shadow"
        >
          <div className="w-12 h-12 rounded-lg bg-purple-100/70 flex items-center justify-center mb-4">
            <Sparkles className="text-purple-600 h-6 w-6" />
          </div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-purple-800/70">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
    </section>
  );
}