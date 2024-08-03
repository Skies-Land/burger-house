import React from 'react'
import HeroTop from '../components/marketing/pageSections/HeroTop.jsx'
import LastProducts from '../components/marketing/pageSections/LastProducts.jsx'
import Products from '../components/marketing/pageSections/Products.jsx'
import Event from '../components/marketing/pageSections/Event.jsx'
import Booking from '../components/marketing/pageSections/Booking.jsx'
import Footer from '../components/marketing/pageSections/Footer.jsx'

export default function HomePage() {
  return (
    <>
      {/* VISUAL REFERENCE FOR RESPONSIVE DESIGN visual */}
      {/* <div className='w-full h-20 bg-red-500 sm:bg-blue-500 md:bg-yellow-600 lg:bg-indigo-500 xl:bg-green-500 2xl:bg-pink-500'>
        <div className='block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden flex items-center justify-center h-full border border-white'>
          <span className='text-white font-bold'>Screen base (0 - 639px) - Téléphones mobiles</span>
        </div>
        <div className='hidden sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden items-center justify-center h-full border border-white'>
          <span className='text-white font-bold'>Screen sm (640px - 767px) - Téléphones mobiles de grande taille, petites tablettes en mode portrait</span>
        </div>
        <div className='hidden md:flex lg:hidden xl:hidden 2xl:hidden items-center justify-center h-full border border-white'>
          <span className='text-white font-bold'>Screen md (768px - 1023px) - Tablettes en mode portrait, petites tablettes en mode paysage</span>
        </div>
        <div className='hidden lg:flex xl:hidden 2xl:hidden items-center justify-center h-full border border-white'>
          <span className='text-white font-bold'>Screen lg (1024px - 1279px) - Tablettes en mode paysage, petits ordinateurs portables</span>
        </div>
        <div className='hidden xl:flex 2xl:hidden items-center justify-center h-full border border-white'>
          <span className='text-white font-bold'>Screen xl (1280px - 1535px) - Ordinateurs portables de taille moyenne à grande, petits moniteurs de bureau</span>
        </div>
        <div className='hidden 2xl:flex items-center justify-center h-full border border-white'>
          <span className='text-white font-bold'>Screen 2xl (1536px et plus) - Grands moniteurs de bureau, téléviseurs, écrans haute résolution</span>
        </div>
      </div> */}
      <HeroTop />
      <LastProducts />
      <Products />
      <Event />
      <Booking />
      <Footer />
    </>
  )
}
