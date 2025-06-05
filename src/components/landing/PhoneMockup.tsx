"use client";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Button from "@/components/ui/button";

export default function PhoneMockup() {
  return (
    <motion.div
     initial={{ opacity: 0, scale: 0.9 }}
     whileInView={{ opacity: 1, scale: 1 }}
     viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="mt-20 relative flex justify-center"
    >
      <div className="hidden sm:absolute sm:inset-0 sm:bg-gradient-to-r sm:from-purple-100/50 sm:to-transparent sm:rounded-3xl sm:-z-10" />

      <div className="relative w-[300px] h-[600px] max-w-[80%] border-8 border-white rounded-[2.5rem] shadow-2xl">
        <div className="h-[32px] w-[3px] bg-purple-200 absolute -left-[11px] top-[72px] rounded-l-lg" />
        <div className="h-[46px] w-[3px] bg-purple-200 absolute -left-[11px] top-[124px] rounded-l-lg" />
        <div className="h-[46px] w-[3px] bg-purple-200 absolute -left-[11px] top-[178px] rounded-l-lg" />
        <div className="h-[64px] w-[3px] bg-purple-200 absolute -right-[11px] top-[142px] rounded-r-lg" />

        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white flex flex-col">
          <div className="p-4 border-b border-purple-100">
            <h3 className="font-semibold text-gray-900">Tasty Burger</h3>
            <p className="text-sm text-purple-600/80">Tap to view in AR</p>
          </div>

          <div className="flex-1 relative bg-gradient-to-br from-purple-50/70 to-purple-100/40 flex items-center justify-center">
            <div className="absolute w-44 h-44 rounded-full bg-purple-200/40 blur-xl animate-pulse sm:w-64 sm:h-64" />
            <div className="relative z-10 text-center w-full h-full">
              {/* Video placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-black">
                <div className="bg-gray-800 w-full h-full flex items-center justify-center">
                  <Phone className="h-16 w-16 text-purple-400" />
                </div>
                <p className="absolute bottom-4 text-white/80">Video will appear here</p>
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

      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-purple-100/50 backdrop-blur-md border border-purple-200 shadow-lg flex items-center justify-center sm:w-20 sm:h-20">
        <div className="bg-purple-50 border-2 border-dashed border-purple-200 rounded-xl w-16 h-16 sm:w-10 sm:h-10" />
      </div>
      <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-purple-100/50 backdrop-blur-md border border-purple-200 shadow-lg flex items-center justify-center sm:w-16 sm:h-16">
        <div className="bg-purple-50 border-2 border-dashed border-purple-200 rounded-xl w-14 h-14 sm:w-8 sm:h-8" />
      </div>
    </motion.div>
  );
}
