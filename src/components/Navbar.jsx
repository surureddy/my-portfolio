'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className="fixed top-0 w-full pb-0 backdrop-blur-md bg-dark-blue shadow-lg z-30 flex justify-between items-center px-5 py-3"

        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img className=" w-60" src="/logo.png" alt="" />

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg text-white">
          <Link href="/">Home</Link>
          <Link href="#contact">Projects</Link>
          <Link href="/">Skills</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden text-white text-3xl" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </motion.nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-20 right-10 w-48 bg-white rounded-lg shadow-lg p-6 flex flex-col items-start space-y-4 z-40"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="#home" onClick={toggleMenu} className="text-black text-lg">Home</Link>
            <Link href="#contact" onClick={toggleMenu} className="text-black text-lg">Projects</Link>
            <Link href="#home" onClick={toggleMenu} className="text-black text-lg">Skills</Link>
            <Link href="#contact" onClick={toggleMenu} className="text-black text-lg">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
