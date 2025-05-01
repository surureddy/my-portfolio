'use client';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.div 
      className="min-h-screen p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded p-5 hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p>Awesome project description!</p>
        </div>
        <div className="bg-white shadow-md rounded p-5 hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold">Project 2</h3>
          <p>Awesome project description!</p>
        </div>
        <div className="bg-white shadow-md rounded p-5 hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold">Project 3</h3>
          <p>Awesome project description!</p>
        </div>
      </div>
    </motion.div>
  );
}
