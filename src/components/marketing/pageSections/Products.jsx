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

        <Heading theme='secondary' alignement='center' className='my-5 text-center'>
            Choisissez et savourez
        </Heading>

        <p className='text-center'>
            Nos Burgers sont préparés avec des produits frais et de qualité. 
            Ils sont servis avec des frites et une boisson. 
            Vous avez le choix entre plusieurs menus. 
            Vous pouvez également composer votre propre menu.
        </p>

        <div className='grid lg:grid-cols-3 gap-x-1 mb-20 mt-10'>
            
            <div className='w-full md:w-2/3 lg:w-full  h-full mx-auto'>
                <div className='relative w-full h-72'>
                    <img src={Product1} alt='Un hamburger' className='bg-primary absolute top-0 left-0 w-full h-full rounded-md object-cover z-0' />
                </div>

                <div className='flex flex-col items-center justify-center px-5 pb-5'>
                    <Heading varient='h3' className='my-5 lg:text-2xl'>
                        Eggcellent Burger
                    </Heading>
                    <p className='text-center lg:h-20'>
                        Steak, œuf au plat avec le jaune coulant, laitue fraîche avec sauce fromagère.
                    </p>
                    <Button color='danger' className='font-secondary rounded-md mb-10 lg:mb-0'>
                        Commandez
                    </Button>
                </div>
            </div>

            <div className='w-full md:w-2/3 lg:w-full  h-full mx-auto'>
                <div className='relative w-full h-72'>
                    <img src={Product2} alt='Un hamburger' className='bg-primary absolute top-0 left-0 w-full h-full rounded-md object-cover z-0' />
                </div>

                <div className='flex flex-col items-center justify-center px-5 pb-5'>
                    <Heading varient='h3' className='my-5 lg:text-2xl'>
                    Classic Cheeseburger
                    </Heading>
                    <p className='text-center lg:h-20'>
                        Double steak, cheddar fondu, tomate, laitue, oignons caramélisé avec sauce spéciale.
                    </p>
                    <Button color='danger' className='font-secondary rounded-md mb-10 lg:mb-0'>
                        Commandez
                    </Button>
                </div>
            </div>

            <div className='w-full md:w-2/3 lg:w-full  h-full mx-auto'>
                <div className='relative w-full h-72'>
                    <img src={Product3} alt='Un hamburger' className='bg-primary absolute top-0 left-0 w-full h-full rounded-md object-cover z-0' />
                </div>

                <div className='flex flex-col items-center justify-center px-5 pb-5'>
                    <Heading varient='h3'className='my-5 lg:text-2xl'>
                        Avocado Burger
                    </Heading>
                    <p className='text-center lg:h-20'>
                        Steak, purée d'avocat crémeuse, radis croquants, laitue fraîche avec sauce spéciale.
                    </p>
                    <Button color='danger' className='font-secondary rounded-md lg:mb-0'>
                        Commandez
                    </Button>
                </div>
            </div>

        </div>

    </Container>
  )
}
