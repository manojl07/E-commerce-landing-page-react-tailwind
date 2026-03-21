import React from "react";
import "./Products.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    badge: "Developer",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image:
      "https://images.dailyobjects.com/marche/product-images/1203/clove-march-crossbody-bag-large-images/Clove-March-Crossbody-Bag-Larrge.png",
  },
  {
    id: 2,
    badge: "Developer",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image:
      "https://images.dailyobjects.com/marche/product-images/1201/all-blue-pedal-daypack-images/All-Blue-Pedal-Daypack-vw.png",
  },
  {
    id: 3,
    badge: "Developer",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image:
      "https://images.dailyobjects.com/marche/product-images/1204/carbon-black-idyll-tote-images/Carbon-Black-Idyll-Tote.png",
  },
  {
    id: 4,
    badge: "Developer",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image:
      "https://images.dailyobjects.com/marche/product-images/1809/loop-qi2-certified-magsafe-compatible-aluminium-power-bank-10000-mah-titanium-images/Titanium-DailyObjects-Loop-MagSafe-Qi2-Battery-Pack-10000.png",
  },
  {
    id: 5,
    badge: "Developer",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image:
      "https://images.dailyobjects.com/marche/product-images/1202/ivory-clove-commute-messenger-large-images/Ivory-Clove-Commute-Messenger-Large-vw.png",
  },
  {
    id: 6,
    badge: "Developer",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image:
      "https://images.dailyobjects.com/marche/product-images/1202/ivory-clove-commute-messenger-large-images/Ivory-Clove-Commute-Messenger-Large-vw.png",
  },
  {
    id: 7,
    badge: "Developer",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image:
      "https://images.dailyobjects.com/marche/product-images/1202/ivory-clove-commute-messenger-large-images/Ivory-Clove-Commute-Messenger-Large-vw.png",
  },
  {
    id: 8,
    badge: "Developer",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image:
      "https://images.dailyobjects.com/marche/product-images/1202/ivory-clove-commute-messenger-large-images/Ivory-Clove-Commute-Messenger-Large-vw.png",
  },
  {
    id: 9,
    badge: "Developer",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image:
      "https://images.dailyobjects.com/marche/product-images/1202/ivory-clove-commute-messenger-large-images/Ivory-Clove-Commute-Messenger-Large-vw.png",
  },
  {
    id: 10,
    badge: "Developer",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image:
      "https://images.dailyobjects.com/marche/product-images/1202/ivory-clove-commute-messenger-large-images/Ivory-Clove-Commute-Messenger-Large-vw.png",
  },
  {
    id: 11,
    badge: "Developer",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image:
      "https://images.dailyobjects.com/marche/product-images/1202/ivory-clove-commute-messenger-large-images/Ivory-Clove-Commute-Messenger-Large-vw.png",
  },
  {
    id: 12,
    badge: "Developer",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image:
      "https://images.dailyobjects.com/marche/product-images/1202/ivory-clove-commute-messenger-large-images/Ivory-Clove-Commute-Messenger-Large-vw.png",
  },
  {
    id: 13,
    badge: "Developer",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image:
      "https://images.dailyobjects.com/marche/product-images/1202/ivory-clove-commute-messenger-large-images/Ivory-Clove-Commute-Messenger-Large-vw.png",
  },
  {
    id: 14,
    badge: "Developer",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image:
      "https://images.dailyobjects.com/marche/product-images/1202/ivory-clove-commute-messenger-large-images/Ivory-Clove-Commute-Messenger-Large-vw.png",
  },
  {
    id: 15,
    badge: "Developer",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image:
      "https://images.dailyobjects.com/marche/product-images/1202/ivory-clove-commute-messenger-large-images/Ivory-Clove-Commute-Messenger-Large-vw.png",
  },
  {
    id: 16,
    badge: "Developer",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    image:
      "https://images.dailyobjects.com/marche/product-images/1202/ivory-clove-commute-messenger-large-images/Ivory-Clove-Commute-Messenger-Large-vw.png",
  },
];

const Products = () => {
  return (
    <>
      <section>

        <h2 className="uppercase mb-5">New in tech</h2>
        <div className="container swiper">


          <Swiper
            modules={[Pagination, Navigation]}
            className="card-wrapper"
            loop={true}
            spaceBetween={20}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="card-item">

                <a href="#" className="card-link">

                  <img
                    src={product.image}
                    alt=""
                    className="card-image"
                  />

                  <p className="badge">{product.badge}</p>

                  <h3 className="card-title leading-none capitalize">
                    {product.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <button className="px-3 py-1 bg-[#5372F0] rounded-2xl text-base text-white font-medium">
                      Buy now
                    </button>
                    <button className="card-button">
                      →
                    </button>
                  </div>

                </a>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </section>
    </>
  );
};

export default Products;