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
          <p className="text-sm mb-2">Silahkan hubungi kami untuk konsultasi mengenai jasa kami.</p>
          <div className="flex items-center space-x-2 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm4.25 2.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm0 1.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zm0 6.25c-2.07 0-6.25 1.04-6.25 3.12v1.13c0 .41.34.75.75.75h11c.41 0 .75-.34.75-.75v-1.13c0-2.08-4.18-3.12-6.25-3.12z"/>
            </svg>
            <span>@martensite.id</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.75c0 6.25 8.25 10.5 8.25 10.5s8.25-4.25 8.25-10.5A8.25 8.25 0 0 0 12 2.5a8.25 8.25 0 0 0-8.25 8.25z"/>
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
