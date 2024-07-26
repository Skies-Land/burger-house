import React from 'react'
import Illustration from '../../../medias/images/background/bg-food.jpg'
import Container from '../../elements/Container'
import Header from './Header'
import Product from '../../../medias/images/heroTop/burger-hero-top.png'

export default function HeroTop() {
  return (
    <div className=' relative bg-primary w-full h-screen'>
      <div className='absolute inset-0 bg-repeat w-full h-full' style={{ backgroundImage: `url(${Illustration})` }}></div>
        <Container>
          <Header />
          <div className='w-full flex items-center'>
            <div className='text-secondary uppercase w-2/3'>
              <h1 className='mb-7'>C'est le moment de goûter au bon goût des hamburgers.</h1>
              <h2 className='font-secondary'> 
                <span className='text-8xl block'>Burger</span> 
                <span className='text-6xl'>House</span> 
                <span className='text-4xl ml-3'> Click&collect</span>
              </h2>
            </div>
            <div className='w-1/3'>
              <img src={Product} alt="Un menu hamburger avec frites et coca cola." className='' />
            </div>
          </div>
        </Container>
    </div>
  )
}
