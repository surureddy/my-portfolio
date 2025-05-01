'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div 
      className="min-h-screen p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32"></textarea>
        <button type="submit" className="px-6 py-3 bg-purple-600 text-white rounded">Send</button>
      </form>
    </motion.div>
  );
}
