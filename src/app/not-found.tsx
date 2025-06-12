"use client";

import { motion } from "framer-motion";
import { Sparkles, Home } from "lucide-react";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center px-4 pb-20">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mt-8 max-w-4xl mx-auto"
      >
        Uh-oh! This page is <span className="text-purple-600">missing</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg text-purple-800/70 mx-auto"
      >
        It looks like the page you're looking for doesn't exist. Let’s get you back on track.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex justify-center"
      >
        <Link href="/">
          <Button size="lg" variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
            Return Home
            <Home className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
