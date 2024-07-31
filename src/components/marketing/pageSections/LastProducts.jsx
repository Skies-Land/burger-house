import React from 'react'
import Container from '../../elements/Container'
import Image1 from '../../../medias/images/products/LastProducts-1.jpg'
import Image2 from '../../../medias/images/products/LastProducts-2.jpg'
import Image3 from '../../../medias/images/products/LastProducts-3.jpg'

export default function LastProducts() {
  return (
    <Container>
        <div className='grid grid-rows-2 grid-cols-2 gap-x-9 gap-y-9 w-full h-96 px-11 my-20 text-white uppercase'>
            
            <div className='relative bg-primary row-span-2 h-full rounded-md p-7'>
                <img src={Image1} className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md' alt="Un délicieux hamburger exposé sur une pièce de bois" />
                <div className='relative z-10'>
                    <span className='block font-bold text-lg'>Killer Burger</span>
                    <span className='text-2xl font-black'>Burger le plus populaire</span>
                </div>
            </div>

            <div className='relative bg-primary h-full rounded-md p-7'>
                <img src={Image2} className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md' alt="Deux délicieux hamburger exposé sur une pièce de bois" />
                <div className='relative z-10'>
                    <span className='block font-bold text-lg'>Island Burger</span>
                    <span className='block text-2xl font-black'>Plus de plaisir</span>
                    <span className='text-2xl font-black'>Plus de goût</span>
                </div>
            </div>

            <div className='relative bg-primary h-full rounded-md p-7'>
                <img src={Image3} className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md' alt="Deux délicieux hamburger exposé sur une pièce de bois" />
                <div className='relative z-10'>
                    <span className='block font-bold text-lg'>Orlando's Burger</span>
                    <span className='text-2xl font-black'>frais & pimenté</span>
                </div>
            </div>

        </div>
    </Container>
    
    
  )
}
