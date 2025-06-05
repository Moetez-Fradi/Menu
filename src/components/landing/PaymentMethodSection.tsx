"use client";
import { motion } from "framer-motion";
import { CreditCard, Smartphone, Wallet } from "lucide-react";

export default function PaymentMethodsSection() {
  const payments = [
    { name: "Credit Cards", icon: <CreditCard className="h-8 w-8 text-purple-600" /> },
    { name: "Mobile Wallets", icon: <Smartphone className="h-8 w-8 text-purple-600" /> },
    { name: "Crypto", icon: <Wallet className="h-8 w-8 text-purple-600" /> },
    { name: "Bank Transfer", icon: <div className="text-purple-600 font-bold">₿</div> },
    { name: "Credit Cards", icon: <CreditCard className="h-8 w-8 text-purple-600" /> },
    { name: "Mobile Wallets", icon: <Smartphone className="h-8 w-8 text-purple-600" /> },
    { name: "Crypto", icon: <Wallet className="h-8 w-8 text-purple-600" /> },
    { name: "Bank Transfer", icon: <div className="text-purple-600 font-bold">₿</div> },
    { name: "Credit Cards", icon: <CreditCard className="h-8 w-8 text-purple-600" /> },
    { name: "Mobile Wallets", icon: <Smartphone className="h-8 w-8 text-purple-600" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mt-28 w-full"
      >
        <motion.h2
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Flexible Payment Options
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {payments.map((payment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="bg-white border border-purple-100 rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{payment.icon}</div>
              <p className="text-lg font-medium text-purple-800">{payment.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}