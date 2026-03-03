import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#EEE8D0] text-black pt-10 pb-4 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kolom 1: Logo & Deskripsi */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <Image 
              src="/assets/logomarten.svg" 
              alt="Martensite Logo" 
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold">Martensite</span>
          </div>
          <p className="text-sm leading-relaxed">
            At Martensite Workwear, we believe that every local brand has the potential to grow into a well-known brand — both in Indonesia and globally.
            <br /><br />
            We are proud to be part of your journey by delivering production excellence, consistency, and reliability in every product we create.
          </p>
        </div>

        {/* Kolom 2: Contact Info */}
        <div className="flex flex-col space-y-2">
          <div className="font-bold mb-2">CONTACT INFORMATION</div>
          <p className="text-sm mb-2">Please contact us to explore our services and develop your ideas together.</p>
          <div className="flex items-center space-x-2 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>@martensite.id</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>+6285777557575</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-1.4 3l-6.6 5.25L5.4 7H18.6zM4 18V8.25l7.2 5.7a1 1 0 0 0 1.2 0l7.2-5.7V18H4z"/>
            </svg>
            <span>martensiteworkwear@gmail.com</span>
          </div>
        </div>

        {/* Kolom 3: Others */}
        <div className="flex flex-col space-y-2">
          <div className="font-bold mb-2">OTHERS</div>
          <Link href="/profile" className="flex items-center space-x-2 text-sm hover:underline">
            <span>▸</span>
            <span>Profile</span>
          </Link>
          <Link href="/portfolio" className="flex items-center space-x-2 text-sm hover:underline">
            <span>▸</span>
            <span>Portfolio</span>
          </Link>
          <Link href="/services" className="flex items-center space-x-2 text-sm hover:underline">
            <span>▸</span>
            <span>Services</span>
          </Link>
          <Link href="/archive" className="flex items-center space-x-2 text-sm hover:underline">
            <span>▸</span>
            <span>Archive</span>
          </Link>
          <Link href="/contact" className="flex items-center space-x-2 text-sm hover:underline">
            <span>▸</span>
            <span>Contact</span>
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-4 text-xs text-center text-black/80">
        &copy; {new Date().getFullYear()} Martensite - Reka Buaya Manufacture
      </div>
    </footer>
  );
}
