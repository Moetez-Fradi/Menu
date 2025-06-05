"use client";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";

export default function LandingSection() {
  return (
<div className="flex flex-col justify-start items-center text-center pt-10 pb-39">
          <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mt-10 flex flex-col sm:flex-row gap-1.5 justify-center items-center rounded-full border-2 border-purple-600 bg-purple-50/60 px-4 py-1.5 shadow-md"
                >
        <Sparkles className="h-4 w-4 text-purple-600" />
        <p className="font-medium text-purple-700 text-sm">
  Experience food like never before
      </p>
      </motion.div>

      <motion.h1
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mt-8 max-w-4xl mx-auto"
      >
        Transform Your Menu with <span className="text-purple-600">Augmented Reality</span>
      </motion.h1>

      <motion.p
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg text-purple-800/70 mx-auto"
      >
        Let customers visualize dishes in 3D before ordering. Build stunning digital menus that boost engagement and increase sales.
      </motion.p>

      <motion.div
       initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button size="lg" className="group bg-purple-600 hover:bg-purple-700">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button size="lg" variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
          View Demo
        </Button>
      </motion.div>
    </div>
  );
}