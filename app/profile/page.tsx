export default function Profile() {
  return (
    <div className="min-h-screen">
      {/* Profile Content */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Kiri: Teks Profile */}
          <div className="w-full">
            <h1 className="text-4xl font-bold text-black mb-8">PROFIL</h1>
            <div className="space-y-6 text-black">
              <p className="leading-relaxed">
                Sumber Berkah Abadi jaya Manufacture merupakan perusahaan yang bergerak di bidang manufaktur, berbadan hukum dan berdiri sejak 3 tahun yang lalu. Kami mengkhususkan diri dalam pembuatan seragam seperti kemeja, celana, kaos, polo shirt, jaket dan wearpack untuk instansi pemerintah, perusahaan, brand ataupun komunitas.
              </p>
              <p className="leading-relaxed">
                Perusahaan kami memiliki sumberdaya manusia yang profesional dan berpengalaman dalam bidang garmen. Proses produksi kami meliputi desain, pemilihan bahan, produksi, dan quality control untuk memastikan produk berkualitas tinggi yang diserahkan tepat waktu.
              </p>
              <p className="leading-relaxed">
                Produksi dilakukan di workshop kami sendiri dengan peralatan yang lengkap dan modern, serta kapasitas produksi yang besar untuk memenuhi kebutuhan pelanggan.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Visi</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Menjadi perusahaan garmen yang modern, profesional dan kredibel di Asia Tenggara.</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Misi</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Berorientasi kepada pelanggan dengan memberikan solusi terbaik serta pelayanan yang ramah, bersahabat, dan solutif.</li>
                  <li>Ikut berperan menciptakan lapangan pekerjaan bagi masyarakat.</li>
                  <li>Meningkatkan kompetensi dan kesejahteraan karyawan melalui pengembangan sumber daya manusia yang berkelanjutan.</li>
                  <li>Menerapkan sistem manajemen kerja yang profesional dengan dibantu teknologi informasi terkini demi tercapainya peningkatan kualitas produk dan layanan.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Kanan: Placeholder Images */}
          <div className="w-full space-y-6">
            <div className="bg-gray-200 rounded-2xl h-64 w-full flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder 1</span>
            </div>
            <div className="bg-gray-200 rounded-2xl h-64 w-full flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder 2</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
