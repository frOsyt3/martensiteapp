import Image from 'next/image';

export default function Archive() {
  const archiveItems = [
    {
      id: 1,
      title: "LAMERENCE",
      image: "/assets/img/product/lamerencelogo.jpg"
    },
    {
      id: 2,
      title: "SOULEVE",
      image: "/assets/img/product/soulevelogo.jpg"
    },
    {
      id: 3,
      title: "CHMB",
      image: "/assets/img/product/chmblogo.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-black mb-2">Archive</h1>
            <h2 className="text-2xl font-bold text-black">ARCHIVE</h2>
          </div>
          
          {/* Grid Archive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {archiveItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="aspect-square bg-gray-200 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-black">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
