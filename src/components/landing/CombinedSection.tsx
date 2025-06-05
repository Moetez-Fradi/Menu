"use client";

import { motion } from "framer-motion";
import { Sparkles, Phone } from "lucide-react";
import Button from "@/components/ui/button";
import { FEATURES } from "@/lib/utils";



export default function CombinedSection() {
  return (
    <div className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-4 py-8">
      <div className="w-full md:w-1/2 flex justify-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative w-[240px] h-[480px] sm:w-[280px] sm:h-[560px] md:w-[300px] md:h-[600px]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-transparent rounded-3xl -z-10" />
          <div className="relative mx-auto border-8 border-white rounded-[2.5rem] w-full h-full shadow-2xl">
            <div className="h-[32px] w-[3px] bg-purple-200 absolute -left-[11px] top-[72px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-purple-200 absolute -left-[11px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-purple-200 absolute -left-[11px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-purple-200 absolute -right-[11px] top-[142px] rounded-r-lg"></div>

            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white flex flex-col">
              <div className="p-4 border-b border-purple-100">
                <h3 className="font-semibold text-gray-900">Tasty Burger</h3>
                <p className="text-sm text-purple-600/80">Tap to view in AR</p>
              </div>
              <div className="flex-1 relative bg-gradient-to-br from-purple-50/70 to-purple-100/40 flex items-center justify-center">
                <div className="absolute w-44 h-44 rounded-full bg-purple-200/40 blur-xl animate-pulse" />
                <div className="relative z-10 text-center w-full h-full">
                  <div className="w-full h-full flex items-center justify-center bg-black">
                    <div className="bg-gray-800 w-full h-full flex items-center justify-center">
                      <Phone className="h-12 w-12 text-purple-400" />
                    </div>
                    <p className="absolute bottom-4 text-white/80 text-sm">
                      Video will appear here
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-purple-100/30 border-t border-purple-100">
                <Button className="w-full bg-purple-600 hover:bg-purple-700" size="sm">
                  Add to Order
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-purple-100/50 backdrop-blur-md border border-purple-200 shadow-lg flex items-center justify-center">
            <div className="bg-purple-50 border-2 border-dashed border-purple-200 rounded-xl w-12 h-12" />
          </div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-purple-100/50 backdrop-blur-md border border-purple-200 shadow-lg flex items-center justify-center">
            <div className="bg-purple-50 border-2 border-dashed border-purple-200 rounded-xl w-10 h-10" />
          </div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 grid grid-cols-1 gap-6 mt-8 md:mt-0 px-2">
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
      </div>
    </div>
  );
}
