import React from 'react'
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import FacebookFillIcon from "remixicon-react/FacebookFillIcon";
import YoutubeFillIcon from "remixicon-react/YoutubeFillIcon";
import TwitterFillIcon from "remixicon-react/TwitterFillIcon";
import PinterestFillIcon from "remixicon-react/PinterestFillIcon";
import LinkedinBoxFillIcon from "remixicon-react/LinkedinBoxFillIcon";

const Footer = () => {
  return (
    <>
      <div className='w-full h-auto bg-[#E0E5DA]'>
        <section className="bg-[#E6E5DA] py-10">
          <div className="max-w-7xl mx-auto px-4 mb-3 md:mb-5">

            <div className="flex flex-col gap-10 md:flex-row md:justify-between">

              {/* LEFT - Email */}
              <div className="md:w-[50%]">
                <h3 className="text-2xl font-bold mb-3">
                  GET EXCLUSIVE ACCESS TO NEW PRODUCTS, DEALS & SURPRISE TREATS
                </h3>

                <div className="flex flex-col sm:flex-row max-w-md gap-2"></div><div className="flex flex-wrap max-w-md gap-2 items-stretch">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="flex-1 bg-white text-gray-500 px-4 h-11 outline-none"
                  />
                  <button className="bg-green-600 text-white px-6 h-11 font-semibold rounded">
                    SUBSCRIBE
                  </button>
                </div>
              </div>

              <div className='flex justify-between gap-6'>
                {/* MIDDLE - Know Us */}
                <div className="md:w-[50%]">
                  <h4 className="text-xl md:text-3xl font-bold mb-3">KNOW US</h4>
                  <div className="flex flex-col gap-2">
                    <a className="capitalize cursor-pointer footer-links">About DailyObjects</a>
                    <a className="capitalize cursor-pointer footer-links">Corporate Gifting</a>
                    <a className="capitalize cursor-pointer footer-links">Find a Store</a>
                    <a className="capitalize cursor-pointer footer-links">About Our Stores</a>
                    <a className="capitalize cursor-pointer footer-links">Blog</a>
                  </div>
                </div>

                {/* RIGHT - Help Desk */}
                <div className="md:w-[50%]">
                  <h4 className="text-xl md:text-3xl font-bold mb-3">HELP DESK</h4>
                  <div className="flex flex-col gap-2 whitespace-nowrap">
                    <a className="capitalize cursor-pointer footer-links">Contact Us</a>
                    <a className="capitalize cursor-pointer footer-links">FAQs</a>
                    <a className="capitalize cursor-pointer footer-links">Terms Of Use</a>
                    <a className="capitalize cursor-pointer footer-links">Warranty Policy</a>
                    <a className="capitalize cursor-pointer footer-links">Privacy & Security Policy</a>
                  </div>
                </div>
              </div>

            </div>
            <div className='flex flex-col items-center text-center md:flex-row md:justify-between'>
              <div>
                <h3 className='font-bold mt-8 mb-3 uppercase'>Follow us on</h3>
                <div className='flex gap-3 md:gap-3'>
                  <InstagramLineIcon className='cursor-pointer hover:text-blue-600 transition-all duration-300' />
                  <FacebookFillIcon className='cursor-pointer hover:text-blue-600 transition-all duration-300' />
                  <YoutubeFillIcon className='cursor-pointer hover:text-blue-600 transition-all duration-300' />
                  <TwitterFillIcon className='cursor-pointer hover:text-blue-600 transition-all duration-300' />
                  <PinterestFillIcon className='cursor-pointer hover:text-blue-600 transition-all duration-300' />
                  <LinkedinBoxFillIcon className='cursor-pointer hover:text-blue-600 transition-all duration-300' />
                </div>
              </div>
              <div>
                <h3 className='font-bold mt-8 mb-3'>DOWNLOAD OUR APP</h3>
                <div className='flex gap-3'>
                  <img className='cursor-pointer footer-links' src="https://images.dailyobjects.com/marche/icons/android.png?tr=cm-pad_resize,v-3,w-118" alt="" />
                  <img className='cursor-pointer footer-links' src="https://images.dailyobjects.com/marche/icons/IOS.png?tr=cm-pad_resize,v-3,w-118" alt="" />
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
      <div className='bg-black text-white py-10'>
        <div className='max-w-[90%] mx-auto flex flex-col md:flex-row md:justify-between'>
        <p className='font-semibold text-lg'>© 2012 - 2026 Firki Wholesale Pvt. Ltd.</p>
        <span className='opacity-60 text-sm'>Terms of use | Privacy policy</span>
        </div>
      </div>
    </>
  )
}

export default Footer