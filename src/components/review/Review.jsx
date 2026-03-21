import React from "react";
import "./Review.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

// const reviews = [
//   "Amazing quality and premium feel.",
//   "Delivery was fast and packaging was neat.",
//   "The product looks even better in real life.",
//   "Very stylish and worth the price.",
//   "I really liked the build quality.",
//   "Perfect for everyday use.",
//   "Clean design and practical product.",
//   "Looks premium and feels durable.",
//   "One of the best purchases recently.",
// ];

const reviews = [
  {
    text: "Amazing quality and premium feel.",
    image: "https://images.dailyobjects.com/marche/feature-banner/banner-pop-100w-type-c-kevlar-charging-cable-blue.jpg?tr=cm-pad_crop,v-3"
  },
  {
    text: "Delivery was fast and packaging was neat.",
    image: "https://images.dailyobjects.com/marche/feature-banner/banner-PIVOT-briefpack-basalt-4.jpg?tr=cm-pad_crop,v-3"
  },
  {
    text: "The product looks even better in real life.",
    image: "https://images.dailyobjects.com/marche/feature-banner/banner-black-loop-power-bank-10000.jpg?tr=cm-pad_crop,v-3"
  },
  {
    text: "Very stylish and worth the price.",
    image: "https://images.dailyobjects.com/marche/feature-banner/surge-max-foldaway-3-in-1-magnetic-magsafe-wireless-charger-2n.jpg?tr=cm-pad_crop,v-3"
  },
  {
    text: "I really liked the build quality.",
    image: "https://images.dailyobjects.com/marche/feature-banner/pop-charger/v2/4/67W-black-banner9.2-R2.jpg?tr=cm-pad_crop,v-3"
  },
  {
    text: "Perfect for everyday use.",
    image: "https://images.dailyobjects.com/marche/feature-banner/carbon-black-easy-square-pouch-2.jpg?tr=cm-pad_crop,v-3"
  },
  {
    text: "Clean design and practical product.",
    image: "https://images.dailyobjects.com/marche/feature-banner/morph-desk-mat-1.jpg?tr=cm-pad_crop,v-3"
  },
  {
    text: "Looks premium and feels durable.",
    image: "https://images.dailyobjects.com/marche/feature-banner/arete-laptop-stand.jpg?tr=cm-pad_crop,v-3"
  },
  {
    text: "One of the best purchases recently.",
    image: "https://images.dailyobjects.com/marche/feature-banner/marshal-tech-kit-organiser-leatherite.jpg?tr=cm-pad_crop,v-3"
  },
];

const Review = () => {
  return (
    <section className="review-section">
      <div className="review-container">
        <div className="review-heading mb-2 md:mb-4 lg:mb-8">
          <h2>Customer Reviews</h2>
          <p>What people are saying about our products</p>
        </div>

        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards]}
          className="review-swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="review-slide">
              <div className="review-card shadow-lg">
                <span className="review-badge">Review {index + 1}</span>

                <div className="review-image-wrap">
                  <img src={review.image} alt="Product" className="shadow-lg" />
                </div>

                <p className="review-text">{review.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;