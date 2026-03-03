import Image from 'next/image';

export default function Profile() {
  return (
    <div className="min-h-screen">
      {/* Profile Content */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Kiri: Teks Profile */}
          <div className="w-full">
            <h1 className="text-4xl font-bold text-black mb-8">PROFILE</h1>
            <div className="space-y-6 text-black">
              <p className="leading-relaxed">
                <b>Martensite Workwear</b> is a specialized garment manufacturing workshop focusing on pants production, established to support local brands in transforming their creative ideas into high-quality products through small–scale manufacturing.
              </p>
              <p className="leading-relaxed">
                We provide production services starting from a minimum quantity of only 24 pieces, making us an ideal solution for emerging and growing local brands that require flexible, efficient, and reliable production without large minimum orders.
              </p>
              <p className="leading-relaxed">
                Our mission is to bridge the gap between creative design concepts and market-ready products by delivering precise craftsmanship, premium materials, and strict quality control standards.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Vision</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To become an adaptive, professional, and solution-oriented garment company that actively supports local brands.</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Mission</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To be customer-oriented by providing the best solutions for every client’s needs.</li>
                  <li>To stay updated with fashion trends in Indonesia and internationally.</li>
                  <li>To continuously improve employee competence through sustainable training programs.</li>
                  <li>To enhance product quality control based on the latest procedures and regulations.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Kanan: Profile Images */}
          <div className="w-full space-y-6">
            <div className="bg-white rounded-2xl overflow-hidden h-80 w-full relative border border-gray-200">
              <Image 
                src="/assets/img/profile/profile1.jpeg" 
                alt="Martensite Profile 1" 
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-black rounded-2xl overflow-hidden h-80 w-full relative">
              <Image 
                src="/assets/img/profile/profile2.jpeg" 
                alt="Martensite Profile 2" 
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
