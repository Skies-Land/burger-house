import React from 'react'
import HeroTop from '../components/marketing/pageSections/HeroTop.jsx'
import LastProducts from '../components/marketing/pageSections/LastProducts.jsx'
import Products from '../components/marketing/pageSections/Products.jsx'
import Event from '../components/marketing/pageSections/Event.jsx'
import Booking from '../components/marketing/pageSections/Booking.jsx'

export default function HomePage() {
  return (
    <>
      <HeroTop />
      <LastProducts />
      <Products />
      <Event />
      <Booking />
    </>
  )
}
