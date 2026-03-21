import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Marque = () => {
  const moveRef = useRef()

  const images = [
    "https://images.dailyobjects.com/marche/assets/images/other/social-6.jpg?tr=cm-pad_crop,v-3,w-800",
    "https://images.dailyobjects.com/marche/assets/images/other/social-7.jpg?tr=cm-pad_crop,v-3,w-800",
    "https://images.dailyobjects.com/marche/assets/images/other/social-8.jpg?tr=cm-pad_crop,v-3,w-800",
    "https://images.dailyobjects.com/marche/assets/images/other/social-9.jpg?tr=cm-pad_crop,v-3,w-800",
    "https://images.dailyobjects.com/marche/assets/images/other/social-5.jpg?tr=cm-pad_crop,v-3,w-800",
    "https://images.dailyobjects.com/marche/assets/images/other/social-4.jpg?tr=cm-pad_crop,v-3,w-800",
    "https://images.dailyobjects.com/marche/assets/images/other/social-6.jpg?tr=cm-pad_crop,v-3,w-800",
    "https://images.dailyobjects.com/marche/assets/images/other/social-7.jpg?tr=cm-pad_crop,v-3,w-800",
    "https://images.dailyobjects.com/marche/assets/images/other/social-8.jpg?tr=cm-pad_crop,v-3,w-800",
    "https://images.dailyobjects.com/marche/assets/images/other/social-9.jpg?tr=cm-pad_crop,v-3,w-800",
    "https://images.dailyobjects.com/marche/assets/images/other/social-5.jpg?tr=cm-pad_crop,v-3,w-800",
    "https://images.dailyobjects.com/marche/assets/images/other/social-4.jpg?tr=cm-pad_crop,v-3,w-800",
  ];

  useEffect(() => {
    const el = moveRef.current;
    const totalWidth = el.scrollWidth / 2;

    gsap.to(el, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className='overflow-hidden py-10 mx-auto lg:max-w-[90%] text-center'>
      <h2>EVERYDAY INSPIRATION</h2>
      <p className='mb-10 text-[#6b7280] text-xs md:text-sm lg:text-base'>
        Follow @dailyobjects_official to join the #DOcommunity
      </p>

      <div ref={moveRef} className="flex gap-6">
        {[...images, ...images].map((img, index) => (
          <div className="shrink-0" key={index}>
            <img
              src={img}
              alt=""
              className="w-55 h-70 object-cover rounded-xl
                         sm:w-40 sm:h-50
                         md:w-50 md:h-65
                         lg:w-60 lg:h-75"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Marque