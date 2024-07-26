import React from 'react'
import Logo from '../../../medias/svg/Logo-burger-house.svg'
import Icone from '../../../medias/svg/ico-bag-clickAndCollect.svg'
import Button from '../../elements/Button'

export default function Header() {
  return (
    <div className='flex items-center justify-between py-10'>

        <div className='w-full'>
            <img src={Logo} alt="Logo Burger House" className='w-64' />
        </div>

        <div className='w-full text-secondary'>
            <div className='flex items-center justify-end'>
                <img src={Icone} alt="Icone de commande" className='w-5 h-5 mr-1' />
                <span>Commandez votre repas en ligne</span>
            </div>
            <div className='mt-5 flex items-center justify-end'>
                <Button className={'bg-primary hover:bg-secondary mr-4'}>
                    Inscription
                </Button>
                <Button className={'bg-secondary hover:bg-primary'}>
                    Connexion
                </Button>
            </div>
        </div>
    </div>
  )
}
