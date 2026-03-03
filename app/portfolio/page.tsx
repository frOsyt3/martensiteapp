'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  year: string;
  galleryImages: {
    image: string;
    description: string;
  }[];
}

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "CHMB",
      image: "/assets/img/product/chmblogo.jpg",
      description: "Koleksi workwear dengan sentuhan streetwear contemporary. CHMB menghadirkan gaya kasual yang tetap profesional, cocok untuk berbagai occasion dan environment.",
      category: "Contemporary Casual",
      year: "2024",
      galleryImages: [
        {
          image: "/assets/img/product/chmblogo.jpg",
          description: "Logo CHMB dengan aesthetic streetwear modern, perfect balance antara casual dan professional look."
        },
        {
          image: "/assets/img/product/chmbpants1.jpeg",
          description: "CHMB Baggy Pants dengan logo khas di bagian depan, material denim berkualitas tinggi dengan cutting relaxed fit."
        },
        {
          image: "/assets/img/product/chmbpants2.jpeg",
          description: "Detail belakang CHMB Pants dengan aksen star patch di kedua saku, finishing premium dan jahitan rapi."
        }
      ]
    },
    {
      id: 2,
      title: "SOULEVE",
      image: "/assets/img/product/soulevelogo.jpg",
      description: "Brand workwear yang mengedepankan kenyamanan dan durabilitas. SOULEVE dirancang khusus untuk aktivitas outdoor dan heavy duty dengan standar kualitas internasional.",
      category: "Outdoor & Heavy Duty",
      year: "2024",
      galleryImages: [
        {
          image: "/assets/img/product/soulevelogo.jpg",
          description: "Logo SOULEVE yang bold dan berani, mencerminkan spirit adventure dan ketahanan maksimal untuk outdoor activities."
        },
        {
          image: "/assets/img/product/soulevebsh.jpg",
          description: "Board Short SOULEVE dengan quick-dry material, ideal untuk aktivitas water sports dan beach activities."
        },
        {
          image: "/assets/img/product/soulevebs.jpg",
          description: "Detail board short dengan drawstring elastic waist dan side pocket waterproof untuk penyimpanan aman."
        }
      ]
    },
    {
      id: 3,
      title: "LAMERENCE",
      image: "/assets/img/product/lamerencelogo.jpg",
      description: "Koleksi premium workwear dengan desain modern dan material berkualitas tinggi. LAMERENCE menghadirkan kombinasi sempurna antara style dan functionality untuk kebutuhan profesional Anda.",
      category: "Premium Workwear",
      year: "2024",
      galleryImages: [
        {
          image: "/assets/img/product/lamerencelogo.jpg",
          description: "Logo LAMERENCE dengan desain minimalis yang mencerminkan brand identity yang kuat dan profesional."
        },
        {
          image: "/assets/img/product/lamerenceb.jpeg",
          description: "Baggy Pants LAMERENCE dengan material premium, nyaman dipakai seharian dengan detail stitching yang rapi."
        },
        {
          image: "/assets/img/product/lamerenceb2.jpeg",
          description: "Detail baggy pants dengan pocket fungsional dan aksen logo yang subtle namun tetap terlihat elegan."
        },
        {
          image: "/assets/img/product/lamerencej.jpeg",
          description: "Jorts Pants LAMERENCE perfect untuk casual outing, kombinasi denim berkualitas dengan cutting modern."
        },
        {
          image: "/assets/img/product/lamerencej2.jpeg",
          description: "Detail finishing jorts dengan washing effect yang natural, menambah karakter vintage pada produk."
        }
      ]
    }
  ];

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
        setCurrentImageIndex(0);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedItem]);

  const handleNext = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === selectedItem.galleryImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrev = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedItem.galleryImages.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen">
      {/* Portfolio Content */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-black mb-2">Portfolio</h1>
            <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
          </motion.div>
          
          {/* Grid Portfolio */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {portfolioItems.map((item, index) => (
              <motion.div 
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedItem(item);
                  setCurrentImageIndex(0);
                }}
                className="bg-white rounded-lg shadow-sm hover:shadow-xl transition duration-300 cursor-pointer group"
              >
                <div className="aspect-square bg-gray-200 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-black group-hover:text-gray-600 transition">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setSelectedItem(null);
              setCurrentImageIndex(0);
            }}
          >
            <motion.div 
              className="bg-white rounded-2xl max-w-6xl w-full h-[90vh] overflow-hidden relative flex flex-row"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
            {/* Close Button */}
            <motion.button
              onClick={() => {
                setSelectedItem(null);
                setCurrentImageIndex(0);
              }}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black text-white rounded-full p-2 transition z-20"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </motion.button>

            {/* Left: Image Gallery (60%) */}
            <div className="relative bg-gray-100 w-[60%] flex-shrink-0">
              <div className="h-full relative flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={selectedItem.galleryImages[currentImageIndex].image}
                      alt={`${selectedItem.title} - ${currentImageIndex + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Navigation Arrows - only show if more than 1 image */}
                {selectedItem.galleryImages.length > 1 && (
                  <>
                    <motion.button
                      onClick={handlePrev}
                      className="absolute left-4 bg-black/50 hover:bg-black text-white rounded-full p-3 transition"
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                      </svg>
                    </motion.button>
                    <motion.button
                      onClick={handleNext}
                      className="absolute right-4 bg-black/50 hover:bg-black text-white rounded-full p-3 transition"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                    </motion.button>
                  </>
                )}

                {/* Image Counter */}
                {selectedItem.galleryImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {selectedItem.galleryImages.length}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Content (40%) */}
            <div className="w-[40%] p-6 flex flex-col overflow-hidden">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-black mb-2">{selectedItem.title}</h2>
                  <div className="flex gap-2 text-xs text-gray-600">
                    <span className="bg-gray-100 px-2 py-1 rounded-full">{selectedItem.category}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full">{selectedItem.year}</span>
                  </div>
                </div>
              </div>
              
              {/* Dynamic Description per Image */}
              <div className="flex-1 mb-4 overflow-y-auto">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={currentImageIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-700 leading-relaxed text-sm"
                  >
                    {selectedItem.galleryImages[currentImageIndex].description}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Thumbnail Gallery - Compact */}
              {selectedItem.galleryImages.length > 1 && (
                <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                  {selectedItem.galleryImages.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
                        currentImageIndex === idx ? 'border-black' : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={`Thumbnail ${idx + 1}`}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Contact Button - Compact */}
              <div className="pt-4 border-t border-gray-200">
                <motion.a
                  href="https://wa.me/6285777557575"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-black text-white rounded-full font-semibold text-sm hover:bg-gray-800 transition w-full justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Contact Us
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  );
}
