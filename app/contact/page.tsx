export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Why Choose Us Section */}
      <section className="bg-[#EEE8D0] py-16">
        <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8">
          {/* Kiri: Judul + 4 Card */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">WHY CHOOSE US?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-200 rounded-2xl shadow p-6">
                <h3 className="font-bold mb-2">Professional Team</h3>
                <p className="text-black/80 text-sm">Our experienced team stays up to date with the latest fashion trends and is committed to providing the best solutions for your products.</p>
              </div>
              <div className="bg-gray-200 rounded-2xl shadow p-6">
                <h3 className="font-bold mb-2">Customer-Focused</h3>
                <p className="text-black/80 text-sm">Our customers are our top priority. We are flexible and ready to adapt to your specific needs.</p>
              </div>
              <div className="bg-gray-200 rounded-2xl shadow p-6">
                <h3 className="font-bold mb-2">Quality-Oriented</h3>
                <p className="text-black/80 text-sm">We ensure excellence in every step of the production process by using grade A materials, along with precise embroidery and screen printing.</p>
              </div>
              <div className="bg-gray-200 rounded-2xl shadow p-6">
                <h3 className="font-bold mb-2">Affordable Price</h3>
                <p className="text-black/80 text-sm">We offer competitive prices while proudly supporting local brands and a new apparel brand.</p>
              </div>
            </div>
          </div>
          {/* Kanan: CTA & Info */}
          <div className="w-full md:w-1/3 flex flex-col justify-center items-start mt-10 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold text-black mb-2">INTERESTED TO WORKING TOGETHER?</h3>
            <p className="text-black/80 mb-6 text-sm">Send us your product plan and we will provide the best solution at the most competitive prices.</p>
            <a href="https://wa.me/6285777557575" target="_blank" rel="noopener noreferrer" className="px-8 py-2 bg-gray-200 rounded-lg font-bold text-black shadow hover:bg-white transition">ORDER NOW</a>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Kiri: Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-black mb-4">CONTACT INFORMATION</h3>
            <p className="mb-6 text-black">Please contact us to explore our services and develop your ideas together.</p>
            <div className="flex items-center space-x-3 mb-3 text-black">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@martensite.id</span>
            </div>
            <div className="flex items-center space-x-3 mb-3 text-black">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
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
