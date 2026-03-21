import React from 'react'

const data = [
  {
    id: 1,
    tip: "BIG SAVING",
    title: "Galaxy S13 Lite Love The Price.",
    price: "From $429.00",
    button: "Buy Now",
    image: "/src/assets/feature-1.png",
    btn: "btn-primary"
  },
  {
    id: 2,
    tip: "15% OFF",
    title: "Smartwatch 7 Light On Price.",
    price: "From $379.00",
    button: "Learn More",
    image: "/src/assets/feature-2.png",
    btn: "btn-secondary"
  },
  {
    id: 3,
    tip: "SMART HOME",
    title: "Five Bold Colors. $99 Each.",
    price: "From $229.00",
    button: "Buy Now",
    image: "/src/assets/feature-3.png",
    btn: "btn-primary"
  },
  {
    id: 4,
    tip: "BEST PRICE",
    title: "5th Generation AirPods.",
    price: "From $499.00",
    button: "Learn More",
    image: "/src/assets/feature-4.png",
    btn: "btn-secondary"
  },
  {
    id: 5,
    tip: "FLAT 25% OFF",
    title: "Headset Max 3rd Generation.",
    price: "From $549.00",
    button: "Buy Now",
    image: "/src/assets/feature-5.png",
    btn: "btn-primary"
  },
  {
    id: 6,
    tip: "NEWLY ADDED",
    title: "Mac Book Pro. New Arrival.",
    price: "From $2499",
    button: "Learn More",
    image: "/src/assets/feature-6.png",
    btn: "btn-secondary"
  }
];

const Featured = () => {
  return (
    <section className="features grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

{data.map((item) => (
  <div key={item.id} className="feature grid grid-cols-2 items-center">

    <div className="content">
      <h4 className="tip">{item.tip}</h4>
      <h2>{item.title}</h2>
      <h3>{item.price}</h3>

      <button className={item.btn}>
        {item.button}
      </button>

    </div>

    <div className="poster flex-wrap">
      <img src={item.image} alt={item.title} />
    </div>

  </div>
))}

    </section>
  )
}

export default Featured