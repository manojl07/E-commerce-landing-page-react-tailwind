import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/carousel/Carousel'
import TopCategories from './components/TopCategories'
import Featured from './components/Featured'
import Products from './components/products/Products'
import Review from './components/review/Review'
import Marque from './components/Marque'
import Companies from './components/companies'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <TopCategories />
      <Featured />
      <Products />
      <Review />
      <Marque />
      <Companies />
      <Footer />
    </div>
  )
}

export default App