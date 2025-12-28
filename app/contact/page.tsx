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
                <p className="text-black/80 text-sm">Tim kami berpengalaman dan berdedikasi untuk memberikan solusi terbaik bagi setiap klien.</p>
              </div>
              <div className="bg-gray-200 rounded-2xl shadow p-6">
                <h3 className="font-bold mb-2">Quality Assurance</h3>
                <p className="text-black/80 text-sm">Kami selalu menjaga kualitas hasil kerja dengan standar tinggi dan proses yang teruji.</p>
              </div>
              <div className="bg-gray-200 rounded-2xl shadow p-6">
                <h3 className="font-bold mb-2">Customer Focused</h3>
                <p className="text-black/80 text-sm">Kepuasan pelanggan adalah prioritas utama, kami siap mendengar dan menyesuaikan kebutuhan Anda.</p>
              </div>
              <div className="bg-gray-200 rounded-2xl shadow p-6">
                <h3 className="font-bold mb-2">Affordable & Transparent</h3>
                <p className="text-black/80 text-sm">Harga kompetitif, transparan, tanpa biaya tersembunyi, dan layanan after sales yang responsif.</p>
              </div>
            </div>
          </div>
          {/* Kanan: CTA & Info */}
          <div className="w-full md:w-1/3 flex flex-col justify-center items-start mt-10 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold text-black mb-2">INTERESTED TO WORKING TOGETHER?</h3>
            <p className="text-black/80 mb-6 text-sm">Ukuran standar website desktop yang umum digunakan adalah 1920×1080 piksel (Full HD) atau 1366×768 piksel. Namun, banyak situs web modern juga menggunakan wadah (container) berukuran 1200-1440 piksel untuk.</p>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="px-8 py-2 bg-gray-200 rounded-lg font-bold text-black shadow hover:bg-white transition">ORDER NOW</a>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Kiri: Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-black mb-4">CONTACT INFORMATION</h3>
            <p className="mb-6 text-black">Silahkan hubungi kami untuk konsultasi mengenasi jasa kami.</p>
            <div className="flex items-center space-x-3 mb-3 text-black">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm4.25 2.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm0 1.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zm0 6.25c-2.07 0-6.25 1.04-6.25 3.12v1.13c0 .41.34.75.75.75h11c.41 0 .75-.34.75-.75v-1.13c0-2.08-4.18-3.12-6.25-3.12z"/>
              </svg>
              <span>@Martensite</span>
            </div>
            <div className="flex items-center space-x-3 mb-3 text-black">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.75c0 6.25 8.25 10.5 8.25 10.5s8.25-4.25 8.25-10.5A8.25 8.25 0 0 0 12 2.5a8.25 8.25 0 0 0-8.25 8.25z"/>
              </svg>
              <span>089xxxxxxxxx</span>
            </div>
            <div className="flex items-center space-x-3 mb-3 text-black">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-1.4 3l-6.6 5.25L5.4 7H18.6zM4 18V8.25l7.2 5.7a1 1 0 0 0 1.2 0l7.2-5.7V18H4z"/>
              </svg>
              <span>Martensite@gmail.com</span>
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
