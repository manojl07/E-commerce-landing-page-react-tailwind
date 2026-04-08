import React from 'react'


const categories = [
  { name: "Tech", img: "https://static1.industrybuying.com/products/appliances/television/led-tv/APP.LED.99836294_1687426487024.webp" },
  { name: "Bags", img: "https://d287ku8w5owj51.cloudfront.net/images/products/large/pdt_24237.png?format=jpg&quality=80&height=1000" },
  { name: "Wallets", img: "https://storage.googleapis.com/bionic_1626848719/products/950478978337065/lists/16601275_1771580595.jpg" },
  { name: "Accessories", img: "https://m.media-amazon.com/images/I/51pOjb8cWPL.jpg" },
  { name: "Gifting", img: "https://media.theeverymom.com/wp-content/uploads/2025/11/08150152/the-everymom-feature-best-hottest-tech-gifts-2025.jpg" },
  { name: "New Arrival", img: "https://t4.ftcdn.net/jpg/09/58/74/13/360_F_958741300_qomSj5K2KXAoKZ7bxk2CNjFxhhDmAVET.jpg" }
];

const TopCategories = () => {
  return (
    <section id='top'>
      <h2 className='uppercase'>Our Top Categories</h2>
      <div className="grid grid-cols-3  gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center text-center py-2 md:py-10">

            <div className="w-20 h-20 m:w-30 aspect-square overflow-hidden rounded-[50%] shadow-sm">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-base font-medium md:mt-6 tracking-widest uppercase text-[clamp(0.8rem,2vw,1rem)]">
              {cat.name}
            </h3>

          </div>
        ))}
      </div>
    </section>
  )
}

export default TopCategories