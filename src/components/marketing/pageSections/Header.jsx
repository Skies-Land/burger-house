import React from 'react'
import Logo from '../../../medias/svg/Logo-burger-house.svg'
import Pictogramme from '../../../medias/svg/picto-burger-house.svg'
import Icone from '../../../medias/svg/ico-bag-clickAndCollect.svg'
import Button from '../../elements/Button'

export default function Header() {
  return (
    <div className='relative z-10 flex items-center justify-between py-10'>

        {/* <div> contenent l'image => Logo */}
        <div className='w-full'>
            <img src={Logo} alt="Logo Burger House" className='w-64 hidden md:block' />
            <img src={Pictogramme} alt="Logo Burger House" className='w-10 md:hidden' />
        </div>

        {/* <div> contenant l'icône => Icone, le texte et les bouttons */}
        <div className='w-full text-secondary'>
            <div className='items-center justify-end hidden md:flex'>
                <img src={Icone} alt="Icone de commande" className='w-5 h-5 mr-1' />
                <span>Commandez votre repas en ligne</span>
            </div>

            {/* <div> contenant les bouttons */}
            <div className='md:mt-5 flex items-center justify-end'>
                <Button className='tracking-widest rounded-md mr-3'>
                    Inscription
                </Button>
                <Button className='tracking-widest rounded-md' color='secondary'>
                    Connexion
                </Button>
            </div>

        </div>

    </div>
  )
}
