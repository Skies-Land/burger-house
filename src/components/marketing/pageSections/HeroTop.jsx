import React from 'react'
import Illustration from '../../../medias/images/background/bg-food.jpg'
import Container from '../../elements/Container'
import Header from './Header'
import Product from '../../../medias/images/heroTop/burger-hero-top.png'
import Button from '../../elements/Button'

export default function HeroTop() {
  return(

    // <div> principale du composant avec un fond de couleur jaune
    <div className='bg-primary w-full'>

      {/* <div> secondaire avec image de fond */}
      <div className='bg-repeat w-full h-full pb-40' style= {{ backgroundImage: `url(${Illustration})` }}>

        <Container>
          <Header />

          {/* <div> contenant l'image => Product, la vignette de prix et le texte */}
          <div className='relative mt-28 w-full'>

            {/* Image de droite => Product */}
            <img src={Product} className='absolute z-0 -top-64 right-0 w-6/12' alt='Un menu hamburger avec frites et coca cola' />

            {/* Vignette de prix */}
            <div className='absolute right-80 top-40 rounded-full bg-red-primary w-40 h-40 p-3'>
              <div className='w-full h-full rounded-full border-2 border-dashed border-white text-white flex items-center justify-center'>
                <div className='text-center'>
                  <span className='block font-extrabold'>
                    <span className='text-5xl'>5</span>,49€
                    </span>
                  <span className='tracking-widest uppercase text-sm'>seulement</span>
                </div>
              </div>
            </div>

            {/* Texte */}
            <div className='relative z-10 text-secondary uppercase'>
              <h1 className='mb-4 font-semibold'>C'est le moment de goûter au bon goût des hamburger.</h1>
              <h2 className='font-secondary shadowTilteSecondary'>
                <span className='text-8xl block'>Burger</span>
                <span className='text-6xl'>House</span> <span className='text-4xl ml-3'>Click <span className='text-red-primary'>&</span> collect</span>
              </h2>
            </div>
          </div>

          {/* Bouton */}
          <Button className='mt-5' color='secondary' theme='big'>
            Créer mon compte
          </Button>

        </Container>
      </div>
    </div>
  )
}
