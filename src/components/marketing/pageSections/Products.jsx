import React from 'react'
import Container from '../../elements/Container'
import HeadingTitle from '../../elements/displayTitle/HeadingTitle'
import Heading from '../../elements/displayTitle/Heading'
import Button from '../../elements/Button'
import Product1 from '../../../medias/images/products/Product-1.jpg'
import Product2 from '../../../medias/images/products/Product-2.jpg'
import Product3 from '../../../medias/images/products/Product-3.jpg'

export default function Products() {
  return (
    <Container>

        <HeadingTitle>
            Toujours des délicieux Burgers
        </HeadingTitle>

        <Heading theme='secondary'>
            Choisissez et savourez
        </Heading>

        <p className='text-center'>
            Nos Burgers sont préparés avec des produits frais et de qualité. 
            Ils sont servis avec des frites et une boisson. 
            Vous avez le choix entre plusieurs menus. 
            Vous pouvez également composer votre propre menu.
        </p>

        <div className='grid grid-cols-3 gap-x-1 mb-20 mt-10'>
            
            <div className='w-full h-full'>
                <div className='relative w-full h-72'>
                    <img src={Product1} alt='Un hamburger' className='bg-primary absolute top-0 left-0 w-full h-full object-cover z-0' />
                </div>

                <div className='flex flex-col items-center justify-center px-5 pb-5'>
                    <Heading varient='h3'>
                        Eggcellent Burger
                    </Heading>
                    <p className='text-center'>
                        Steak de boeuf, œuf au plat avec le jaune coulant, laitue fraîche avec sauce fromagère.
                    </p>
                    <Button color='danger' className='font-secondary'>
                        Commandez
                    </Button>
                </div>
            </div>

            <div className='w-full h-full'>
                <div className='relative w-full h-72'>
                    <img src={Product2} alt='Un hamburger' className='bg-primary absolute top-0 left-0 w-full h-full object-cover z-0' />
                </div>

                <div className='flex flex-col items-center justify-center px-5 pb-5'>
                    <Heading varient='h3'>
                    Classic Cheeseburger
                    </Heading>
                    <p className='text-center'>
                    
                        Double steak de boeuf, cheddar fondu, tomate, laitue, oignons caramélisé avec sauce spéciale.
                    </p>
                    <Button color='danger' className='font-secondary'>
                        Commandez
                    </Button>
                </div>
            </div>

            <div className='w-full h-full'>
                <div className='relative w-full h-72'>
                    <img src={Product3} alt='Un hamburger' className='bg-primary absolute top-0 left-0 w-full h-full object-cover z-0' />
                </div>

                <div className='flex flex-col items-center justify-center px-5 pb-5'>
                    <Heading varient='h3'>
                        Avocado Burger
                    </Heading>
                    <p className='text-center'>
                    Steak de boeuf, purée d'avocat crémeuse, radis croquants, laitue fraîche avec sauce spéciale.
                    </p>
                    <Button color='danger' className='font-secondary'>
                        Commandez
                    </Button>
                </div>
            </div>

        </div>

    </Container>
  )
}
