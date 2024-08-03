import React from 'react'
import Container from '../../elements/Container'
import Heading from '../../elements/displayTitle/Heading'
import ImageBooking1 from '../../../medias/images/background/Assiette-burger-frites.png'
import ImageBooking2 from '../../../medias/images/background/Burger.png'
import ImageBooking3 from '../../../medias/images/background/Sauce-pimente.png'

export default function Booking() {
  return (
    <Container>
        <div className='relative mb-20'>
            <img src={ImageBooking2} alt="Un hamburger" className='hidden md:block absolute -top-20 -left-36 z-10' />
            <img src={ImageBooking3} alt="Une sauce pimentée" className='hidden lg:block absolute bottom-0 left-0' />
            <img src={ImageBooking1} alt="Une assiette hamburger frites" className='hidden lg:block absolute -bottom-52 -right-96' />

            <div className='max-w-3xl mx-auto sm:px-10 md:py-20'>
                <Heading varient='h3' alignement='center'> 
                    Réservation
                </Heading>
                <Heading alignement='center' theme='secondary' className='mt-5 text-center'> 
                    Réservez votre table
                </Heading>

                <form className='grid sm:grid-cols-2 gap-x-7 gap-y-6 mt-20'>
                    <div>
                        <label htmlFor="name">Nom et prénom</label>
                        <input 
                            type="text" 
                            name='name' 
                            id='name' 
                            autoComplete='off'
                            placeholder='Votre nom et prénom' 
                            className='focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5' 
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Email</label>
                        <input 
                            type="email" 
                            name='email' 
                            id='email' 
                            autoComplete='off'
                            placeholder='votre-email@gmail.com' 
                            className='focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5' 
                        />
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input 
                            type="date" 
                            name='date' 
                            id='date' 
                            autoComplete='off'
                            className='focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5' 
                        />
                    </div>
                    <div>
                        <label htmlFor="time">Heure</label>
                        <input 
                            type="time" 
                            name='time' 
                            id='time' 
                            autoComplete='off'
                            className='focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5' 
                        />
                    </div>
                    <div>
                        <label htmlFor="customer">Nombre de personnes</label>
                        <input 
                            type="number" 
                            name='customer' 
                            id='customer' 
                            autoComplete='off'
                            placeholder='0'
                            className='focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-5' 
                        />
                    </div>
                    <div>
                        <label htmlFor="sendBooking" className='invisible'>Trouver une table</label>
                        <input 
                            type="button" 
                            name='sendBooking' 
                            id='sendBooking' 
                            className='bg-red-primary hover:bg-red-primary-hover w-full text-white font-secondary tracking-widest uppercase py-5 cursor-pointer rounded-md animate'
                            value='Trouver une table'
                        />
                    </div>

                </form>
            </div>
        </div>
    </Container>
  )
}
