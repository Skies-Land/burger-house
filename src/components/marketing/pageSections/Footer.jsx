import React from 'react'
import Container from '../../elements/Container'
import BackgroundImage from '../../../medias/images/background/bg-footer.jpg'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import Logo from '../../../medias/svg/Logo-burger-house-white.svg'
import IconIstagram from '../../../medias/svg/instagram-brands-solid.svg'
import IconFacebook from '../../../medias/svg/facebook-f-brands-solid.svg'
import IconTwitter from '../../../medias/svg/x-twitter-brands-solid.svg'
import IconWhatsApp from '../../../medias/svg/whatsapp-brands-solid.svg'

export default function Footer() {
  return (
    <Container>
        <div className='relative lg:mb-20 p-5 text-white'> 
            <img src={BackgroundImage} alt="Un plan de travail de cuisine où l'on conçoit un hamburger" className='bg-black absolute top-0 left-0 w-full h-full object-cover z-0' />

            <div className='relative grid md:grid-cols-2 z-10'>
                {/* Contenu de gauche du footer  */}
                <div className='w-full p-5 md:mt-20 mt-10 mb-10 md:mb-28'>
                    <img src={Logo} alt="Logo Burger House" className='w-2/3' />
                    <p className='mt-10'>
                        Burger House est un restaurant de burger situé à Lyon. 
                        Nous vous proposons des burgers de qualité, préparés avec des produits frais et locaux. 
                        Venez déguster nos burgers dans notre restaurant ou commandez en ligne pour une livraison à domicile.
                    </p>
                </div>

                {/* Contenu de droite du footer  */}
                <div className='md:h-full w-full flex flex-col items-start md:items-center justify-center mb-10 md:mb-0 p-5 md:p-0'>
                    <div className='flex items-center'>
                        <MapPinIcon className="h-6 w-6 md:h-10 md:w-10 mr-5" />
                        <span className='uppercase font-semibold text-sm md:text-lg -tracking-tighter'>15 place bellecour, 69000 Lyon</span>
                    </div>
                    <div className='flex items-center mt-5'>
                        <EnvelopeIcon className="h-6 w-6 md:h-10 md:w-10 mr-5" />
                        <span className='uppercase font-semibold text-sm md:text-lg -tracking-tighter'>contact@burger-house.com</span>
                    </div>
                </div>
            </div>

            {/* Contenu bas du footer */}
            <div className='relative z-10 flex items-center justify-between'>
                <div className='uppercase font-semibold tracking-tighter text-sm'>
                    © Burger House 2024. All rights reserved.
                </div>

                <div className='flex'>
                    <a href="https://instagram.com" target='_blank' rel='noreferrer' className='group' >
                        <img src={IconIstagram} alt="" className='w-7 h-7 mr-2 bg-white group-hover:bg-primary animate rounded-full p-1' />
                    </a>
                    <a href="https://facebook.com" target='_blank' rel='noreferrer' className='group'>
                        <img src={IconFacebook} alt="" className='w-7 h-7 mr-2 bg-white group-hover:bg-primary animate rounded-full p-1' />
                    </a>
                    <a href="https://twitter.com" target='_blank' rel='noreferrer' className='group'>
                        <img src={IconTwitter} alt="" className='w-7 h-7 mr-2 bg-white group-hover:bg-primary animate rounded-full p-1' />
                    </a>
                    <div className='group'>
                        <img src={IconWhatsApp} alt="" className='w-7 h-7 bg-white group-hover:bg-primary animate rounded-full p-1' />
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}
