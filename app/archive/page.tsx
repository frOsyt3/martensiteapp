// import Image from 'next/image';

export default function Archive() {
  /* Archive items temporarily hidden
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
  */

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header Section */}
      <section className="bg-white py-20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          {/* Header */}
          <div className="text-left mb-8">
            <h1 className="text-3xl font-bold text-black mb-2">Archives</h1>
            <div className="w-24 h-1 bg-black rounded-full"></div>
          </div>
          
          {/* Coming Soon Placeholder */}
          <div className="text-center py-16">
            <p className="text-black/60 text-lg">Coming Soon</p>
          </div>

          {/* Gallery temporarily hidden */}
          {/*
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 elegant-scroll">
            <div className="flex space-x-4" style={{ width: 'max-content' }}>
              {archiveItems.map((item) => (
                <div 
                  key={item.id}
                  className="w-[200px] flex-shrink-0 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300"
                >
                  <div className="aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-black text-sm">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
          */}
        </div>
      </section>
    </div>
  );
}
