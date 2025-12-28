'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    '/assets/img/hero/jeans1.png',
    '/assets/img/hero/jeans2.png',
    '/assets/img/hero/jeans3.png'
  ];

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    },6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white w-full py-16 md:py-24 relative overflow-hidden">
        {/* Hero Image Slideshow - Behind everything */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.50, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentImageIndex]}
                alt={`Hero ${currentImageIndex + 1}`}
                fill
                className="object-cover object-center"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Background Pattern with animations */}
        <div className="absolute inset-0 opacity-5 z-[1]">
          <motion.div 
            className="absolute top-10 left-10 w-32 h-32 border-2 border-black rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-20 right-20 w-16 h-16 bg-[#EEE8D0] rounded-full"
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-1/4 w-24 h-24 border border-black/20 rounded-full"
            animate={{ 
              x: [0, 30, 0],
              rotate: [0, -180, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-1/2 right-10 w-20 h-20 bg-black/10 rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-10 right-1/3 w-12 h-12 bg-[#EEE8D0] rounded-full"
            animate={{ 
              y: [0, 25, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start relative z-10">
          {/* Image Area with floating decorative elements */}
          <motion.div 
            className="w-full md:w-1/2 h-64 md:h-96 flex items-center justify-center mb-8 md:mb-0 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Floating decorative elements */}
            <motion.div 
              className="absolute top-0 left-0 w-16 h-16 bg-[#EEE8D0] rounded-full opacity-60"
              animate={{ 
                y: [0, -15, 0],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-12 h-12 border-2 border-black/20 rounded-full"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black/10 rounded-full"
              animate={{ 
                scale: [1, 1.8, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Hero Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <motion.h1 
              className="text-3xl md:text-4xl font-extrabold text-black mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Martensite Workwear
            </motion.h1>
            
            <motion.h2 
              className="text-xl font-bold text-black mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Specialized in Pants
            </motion.h2>
            
            <motion.p 
              className="text-black mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Martensite is the ideal solution for a new apparel brand looking to produce on a small scale – with a minimum order of just 24 pieces per article.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4 w-full md:w-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="px-6 py-2 border-2 border-black rounded-lg font-semibold text-black hover:bg-primary transition">
                  CONTACT US
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/portfolio" className="px-6 py-2 border-2 border-black rounded-lg font-semibold text-black hover:bg-primary transition">
                  PORTFOLIO
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-primary py-16">
        <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8">
          {/* Kiri: Judul + 4 Card */}
          <div className="w-full md:w-2/3">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-black mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              WHY CHOOSE US?
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              <motion.div 
                className="bg-gray-200 rounded-2xl shadow p-6"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <h3 className="font-bold mb-2">Professional Team</h3>
                <p className="text-black/80 text-sm">Our experienced team stays up to date with the latest fashion trends and is committed to providing the best solutions for your products.</p>
              </motion.div>
              <motion.div 
                className="bg-gray-200 rounded-2xl shadow p-6"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <h3 className="font-bold mb-2">Customer-Focusede</h3>
                <p className="text-black/80 text-sm">Our customers are our top priority. We are flexible and ready to adapt to your specific needs.</p>
              </motion.div>
              <motion.div 
                className="bg-gray-200 rounded-2xl shadow p-6"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <h3 className="font-bold mb-2">Quality-Oriented</h3>
                <p className="text-black/80 text-sm">We ensure excellence in every step of the production process by using grade A materials, along with precise embroidery and screen printing.</p>
              </motion.div>
              <motion.div 
                className="bg-gray-200 rounded-2xl shadow p-6"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <h3 className="font-bold mb-2">Affordable Price</h3>
                <p className="text-black/80 text-sm">We offer competitive prices while proudly supporting local brands and a new apparel brand.</p>
              </motion.div>
            </motion.div>
          </div>
          {/* Kanan: CTA & Info */}
          <div className="w-full md:w-1/3 flex flex-col justify-center items-start mt-10 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold text-black mb-2">INTERESTED TO WORKING TOGETHER?</h3>
            <p className="text-black/80 mb-6 text-sm">Send us your product plan and we will provide the best solution at the most competitive prices.</p>
            <a href="https://wa.me/6285777557575" target="_blank" rel="noopener noreferrer" className="px-8 py-2 bg-gray-200 rounded-lg font-bold text-black shadow hover:bg-white transition">
              ORDER NOW
            </a>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="bg-[#1E1E1E] py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-white text-xl font-bold mb-8 tracking-wider">OUR CLIENTS</h2>
          <div className="relative overflow-hidden">
            {/* Gradient overlays - positioned relative to marquee container */}
            <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#1E1E1E] via-[#1E1E1E]/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#1E1E1E] via-[#1E1E1E]/80 to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex items-center space-x-16 animate-marquee py-4">
              {/* Original set */}
              <Image src="/assets/img/product/chmblogo.jpg" alt="CHMB" width={120} height={120} className="h-28 w-auto object-contain client-logo flex-shrink-0" />
              <Image src="/assets/img/product/soulevelogo.jpg" alt="Souleve" width={120} height={120} className="h-28 w-auto object-contain client-logo flex-shrink-0" />
              <Image src="/assets/img/product/lamerencelogo.jpg" alt="Lamerence" width={120} height={120} className="h-28 w-auto object-contain client-logo flex-shrink-0" />
              
              {/* Duplicate 1 */}
              <Image src="/assets/img/product/chmblogo.jpg" alt="CHMB" width={120} height={120} className="h-28 w-auto object-contain client-logo flex-shrink-0" />
              <Image src="/assets/img/product/soulevelogo.jpg" alt="Souleve" width={120} height={120} className="h-28 w-auto object-contain client-logo flex-shrink-0" />
              <Image src="/assets/img/product/lamerencelogo.jpg" alt="Lamerence" width={120} height={120} className="h-28 w-auto object-contain client-logo flex-shrink-0" />
              
              {/* Duplicate 2 */}
              <Image src="/assets/img/product/chmblogo.jpg" alt="CHMB" width={120} height={120} className="h-28 w-auto object-contain client-logo flex-shrink-0" />
              <Image src="/assets/img/product/soulevelogo.jpg" alt="Souleve" width={120} height={120} className="h-28 w-auto object-contain client-logo flex-shrink-0" />
              <Image src="/assets/img/product/lamerencelogo.jpg" alt="Lamerence" width={120} height={120} className="h-28 w-auto object-contain client-logo flex-shrink-0" />
              
              {/* Duplicate 3 - untuk seamless loop */}
              <Image src="/assets/img/product/chmblogo.jpg" alt="CHMB" width={120} height={120} className="h-28 w-auto object-contain client-logo flex-shrink-0" />
              <Image src="/assets/img/product/soulevelogo.jpg" alt="Souleve" width={120} height={120} className="h-28 w-auto object-contain client-logo flex-shrink-0" />
              <Image src="/assets/img/product/lamerencelogo.jpg" alt="Lamerence" width={120} height={120} className="h-28 w-auto object-contain client-logo flex-shrink-0" />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-[#ededed] py-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Kiri: Teks */}
          <div className="w-full md:w-1/2 flex flex-col justify-center mb-10 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">ABOUT US</h2>
            <p className="text-black mb-6">Martensite is the ideal solution for a new apparel brand looking to produce on a small scale – with a minimum order of just 24 pieces per article..</p>
            <button className="px-5 py-2 border border-black rounded-full text-sm font-semibold hover:bg-primary hover:text-black transition w-max">
              Selengkapnya
            </button>
          </div>
          {/* Kanan: Lingkaran Dekorasi */}
          <div className="w-full md:w-1/2 flex items-center justify-center relative min-h-[260px] md:min-h-[320px]">
            {/* Lingkaran Hitam */}
            <div className="absolute right-0 top-1/3 rounded-full bg-black w-36 h-36 md:w-48 md:h-48 z-0"></div>
            {/* Lingkaran Krem */}
            <div className="absolute left-2/3 bottom-0 rounded-full bg-[#EEE8D0] w-20 h-20 md:w-28 md:h-28 z-20"></div>
          </div>
        </div>
      </section>

      {/* Our Service Section */}
      <section className="bg-[#EEE8D0] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center text-black mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-black mx-auto mb-10 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.div>
          <motion.div 
            className="flex space-x-6 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {/* Service Cards */}
            {[
              { name: 'Board Short', image: '/assets/img/product/soulevebsh.jpg' },
              { name: 'Baggy Pants', image: '/assets/img/product/lamerenceb.jpeg' },
              { name: 'Jorts Pants', image: '/assets/img/product/lamerencej.jpeg' }
            ].map((service, index) => (
              <motion.div 
                key={index} 
                className="min-w-[220px] bg-white rounded-xl shadow p-6 flex flex-col items-center"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src={service.image} 
                    alt={service.name} 
                    width={160}
                    height={160}
                    className="h-40 w-40 object-cover mb-4 rounded-lg"
                  />
                </motion.div>
                <h3 className="text-lg font-bold text-black mb-2">{service.name}</h3>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center mt-8">
            <a 
              href="https://wa.me/6285777557575" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-semibold text-base shadow hover:bg-[#232323] transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm0 12a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2zm12-12a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V5zm0 12a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2z"/>
              </svg>
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Kiri: Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-black mb-4">CONTACT INFORMATION</h3>
            <p className="mb-6 text-black">Get in touch with us for the best solution tailored to your product plan.</p>
            <div className="flex items-center space-x-3 mb-3 text-black">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm4.25 2.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm0 1.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zm0 6.25c-2.07 0-6.25 1.04-6.25 3.12v1.13c0 .41.34.75.75.75h11c.41 0 .75-.34.75-.75v-1.13c0-2.08-4.18-3.12-6.25-3.12z"/>
              </svg>
              <span>@martensite.id</span>
            </div>
            <div className="flex items-center space-x-3 mb-3 text-black">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.75c0 6.25 8.25 10.5 8.25 10.5s8.25-4.25 8.25-10.5A8.25 8.25 0 0 0 12 2.5a8.25 8.25 0 0 0-8.25 8.25z"/>
              </svg>
              <span>+6285777557575</span>
            </div>
            <div className="flex items-center space-x-3 mb-3 text-black">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-1.4 3l-6.6 5.25L5.4 7H18.6zM4 18V8.25l7.2 5.7a1 1 0 0 0 1.2 0l7.2-5.7V18H4z"/>
              </svg>
              <span>martensiteworkwear@gmail.com</span>
            </div>
          </div>
          {/* Kanan: Contact Form */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-black mb-4">CONTACT FORM</h3>
            <p className="mb-4 text-black">isi form dibawah ini untuk menghubungi admin via email.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Nama Anda (Wajib)...." className="w-full px-4 py-2 rounded bg-[#EEE8D0] text-black placeholder-black/60 focus:outline-none" />
              <input type="email" placeholder="Email Anda (Wajib)...." className="w-full px-4 py-2 rounded bg-[#EEE8D0] text-black placeholder-black/60 focus:outline-none" />
              <textarea rows={4} placeholder="Pesan (Wajib)...." className="w-full px-4 py-2 rounded bg-[#EEE8D0] text-black placeholder-black/60 focus:outline-none"></textarea>
              <button type="submit" className="px-6 py-2 bg-black text-white rounded-full font-bold hover:bg-[#232323] transition">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

