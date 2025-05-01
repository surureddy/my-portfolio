'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';


export default function HeroSection() {
  const skills = [
    'Java',
    'JavaScript',
    'TypeScript',
    'C#',
    'Next.js',
    'React.js',
    'Node.js',
    'SpringBoot',
    'TailwindCss',
    'GitHub'
  ];

  return (
    <>
   
    <section id="home" className="relative bg-[#0B0C1E] overflow-hidden min-h-screen">
      {/* CORE HERO WRAPPER */}
      <div className="flex flex-col items-center justify-start md:justify-center min-h-screen pt-32 md:pt-0 px-4">
        
        {/* CIRCLES + PROFILE */}
        <div className="relative flex items-center justify-center">
          {/* Solid background circle */}
          <motion.div
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#20223E] opacity-30" />
          </motion.div>

          {/* Dashed spinning circle */}
          <motion.div
            className="absolute"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
          >
            <div className="w-[360px] h-[360px] sm:w-[600px] sm:h-[600px] border-2 border-dashed border-white-600 rounded-full opacity-20" />
          </motion.div>

          {/* Profile picture */}
          <motion.div
            className="relative z-10 "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-48 h-48 sm:w-64  sm:h-4 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-[#444674]">
              <Image
                src="/heroimage.jpeg"
                alt="Suraj"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* NAME & SOCIAL LINKS */}
        <motion.div
          className="mt-6 text-center z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white">SURAJ</h1>
          <p className="text-sm md:text-lg text-gray-400 mt-2">Software Developer</p>
          <div className="flex items-center justify-center gap-4 mt-4">
          <a 
  href="https://www.linkedin.com/in/surajakangire" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-gray-300 hover:text-blue-500 text-2xl"
>
  <FaLinkedin />
</a>

<a 
  href="https://www.instagram.com/su_raj_reddy/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-gray-300 hover:text-pink-500 text-2xl"
>
  <FaInstagram />
</a>

          </div>
        </motion.div>

        {/* MOBILE VIEW: About & Skills stacked */}
        <div className="md:hidden w-full mt-8 space-y-8 px-4">
          {/* About Me */}
          <motion.div
            className="text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <h2 className="text-3xl font-bold  text-purple-500 mb-2">Suraj Akangire</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              I’m a skilled Full Stack Developer specializing in React.js and Next.js for frontend development and Node.js with Express.js
for backend development. Proficient in building responsive web applications, integrating RESTful APIs, and managing real-
time databases like MongoDB. With a passionate software developer who loves turning ideas into reality.
With a focus on full-stack apps, I build performant, scalable solutions—and have fun along the way.a strong grasp of both client-side and server-side technologies, I am passionate about
delivering high-quality, scalable solutions. I am committed to driving innovation through clean, efficient code and best
practices.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <h2 className="text-xl font-bold text-purple-500 mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  className="bg-[#2A2D46] text-white p-3 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20, backgroundColor: '#2A2D46' }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    backgroundColor: ['#2A2D46', '#444674', '#2A2D46']
                  }}
                  transition={{
                    delay: 1.6 + i * 0.2,
                    duration: 4,
                    ease: 'easeInOut',
                    repeat: Infinity
                  }}
                >
                  <h3 className="font-semibold text-sm">{skill}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP VIEW: About & Skills side-by-side */}
      <div className="hidden md:flex absolute top-[56%] left-0 right-0 transform -translate-y-1/2 px-24 justify-between z-10">
        {/* About Me */}
        <motion.div
          className="w-1/3 text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-purple-500 mb-4">Suraj Akangire</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
          I’m a skilled Full Stack Developer specializing in React.js and Next.js for frontend development and Node.js with Express.js
for backend development. Proficient in building responsive web applications, integrating RESTful APIs, and managing real-
time databases like MongoDB. With a passionate software developer who loves turning ideas into reality.
With a focus on full-stack apps.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="w-1/3 text-center text-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <h2 className="text-3xl text-purple-500 font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                className="bg-[#2A2D46] text-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20, backgroundColor: '#2A2D46' }}
                animate={{
                  opacity: 1,
                  y: 0,
                  backgroundColor: ['#2A2D46', '#444674', '#2A2D46']
                }}
                transition={{
                  delay: 1.6 + i * 0.3,
                  duration: 4,
                  ease: 'easeInOut',
                  repeat: Infinity
                }}
              >
                <h3 className="font-semibold">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
