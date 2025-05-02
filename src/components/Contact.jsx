'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function Contact() {
  const projects = [
    {
      title: "Suraj Aqua Android App",
      description: "A mobile app developed to streamline inventory tracking by leveraging QR code scanning for real-time product updates. The app integrates Firebase Realtime Database for cloud synchronization and SQLite for local storage, ensuring seamless data management even offline. Users can easily add, update, and monitor inventory, with automatic syncing between devices for consistent and accurate records.",
      link: "#",
    },
    {
      title: "Suraj Aqua Website",
      description: "SurajAqua is a website developed using Next.js, focused on providing seamless and interactive user experiences. It is designed to be responsive, fast, and scalable, leveraging Next.js's features like server-side rendering (SSR) for optimized performance and SEO.",
      link: "https://github.com/surureddy/Suraj-Aqua-v2.0",
    },
    {
      title: "SreeCam Security Website",
      description: "SreeCam Security is a website developed using Next.js, focused on providing seamless and interactive user experiences. It is designed to be responsive, fast, and scalable, leveraging Next.js's features like server-side rendering (SSR) for optimized performance and SEO.",
      link: "https://github.com/surureddy/sreecam_security",
    },
  ];

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_v3i7vw4',    // Your EmailJS Service ID
      'template_nw8hh1j',   // Your EmailJS Template ID
      form.current,
      '33y9zJzF9m5po2yJd'   // Your EmailJS Public Key
    )
    .then((result) => {
      console.log(result.text);
      alert("✅ Message sent successfully!");
      if (form.current) form.current.reset();
    }, (error) => {
      console.log(error.text);
      alert("❌ Failed to send message. Try again later.");
    });
  };

  return (
    <motion.section
      id="contact"
      style={{ perspective: 1200 }}
      initial={{ rotateY: -90, opacity: 0 }}
      whileInView={{ rotateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[#0B0C1E] flex flex-col justify-center items-center p-10 text-white min-h-screen"
    >

      {/* Heading */}
      <div className="my-16 w-full text-center">
        <h2 className="text-5xl font-bold mb-10 text-purple-500">My Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] p-6 rounded-lg border border-gray-700 text-white hover:bg-[#2A2A3E] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-purple-500">{project.title}</h3>
              <p className="mt-4 text-gray-400">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col items-center max-w-md w-full space-y-8">
        <h2 className="text-5xl font-bold mb-6 text-purple-500">Contact Me</h2>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 w-full">
          <input
            name="user_name"
            className="p-3 rounded bg-[#1f1f1f] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            name="user_email"
            className="p-3 rounded bg-[#1f1f1f] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            className="p-3 rounded bg-[#1f1f1f] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 text-white px-8 py-4 rounded-full mt-4 hover:bg-purple-700 transition-all duration-300"
          >
            Send
          </button>
        </form>
      </div>

    </motion.section>
  );
}
