import React from 'react'
import Navbar from './components/layouts/Navbar'
import HeroBanner from './components/views/home/HeroBanner'
import FeaturedProducts from './components/views/home/FeaturedProducts'
import TopCategories from './components/views/home/TopCategories'
import Testimonials from './components/views/home/Testimonials'
import NewsLetterSignup from './components/views/home/NewsLetterSignup'
import Footer from './components/layouts/Footer'

const App = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50 px-4 py-6">
      <Navbar />
      <HeroBanner />
      <FeaturedProducts />
      <TopCategories />
      <Testimonials />
      <NewsLetterSignup />
      <Footer />
    </div>
  )
}

export default App