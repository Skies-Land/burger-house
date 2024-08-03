import React from 'react'
import Container from '../../elements/Container'
import AliceCarousel from 'react-alice-carousel'
import '../../../css/carousel.css'
import EventImage1 from '../../../medias/images/event/dorian-hurst-d-igN2ptyC8-unsplash.jpg'
import EventImage2 from '../../../medias/images/event/joseph-pearson-FrmpLKLNgNw-unsplash.jpg'
import EventImage3 from '../../../medias/images/event/pablo-merchan-montes-hyIE90CN6b0-unsplash.jpg'
import Heading from '../../elements/displayTitle/Heading'

const Slide = ({children, category, title, image, description}) => {
    return (
        <div className='grid md:grid-cols-2 p-3 md:p-6'> 

            {/* Contenu du côté gauche du carousel */}
            <div className='p-5 md:p-10 md:mb-10'>
                <Heading variant='h4'>
                    {category}
                </Heading>
                <Heading theme='secondary' variant='h3' className='mb-5'>
                    {title}
                </Heading>
                <p className='tracking-wide text-lg leading-relaxed font-light text-gray-800 mb-0 md:mb-10'>
                    {children}
                </p>
            </div>

            {/* Contenu du côté droit du carousel */}
            <div className='relative w-full h-96 md:h-full'>
                <img src={image} alt={description} className='bg-primary absolute top-0 left-0 w-full h-full rounded-md  object-cover object-bottom z-0' />
            </div>
        </div>
    )
}

export default function Event() {

    const items = [
        <Slide
            image={EventImage1}
            category='Événement à venir'
            title='Vivez une expérience unique'
            description= 'Image célébrant un match de football'
        >
            Un match de football exceptionnel à vivre chez Burger House. Venez encourager 
            votre équipe préférée et profitez de nos offres spéciales. Durant cet événement, 
            nous vous proposons des burgers et des boissons à des prix exceptionnels.
        </Slide>,
        <Slide
            image={EventImage2}
            category='Événement à venir'
            title='Une soirée en musique'
            description= "Image d'une salle de concert."
        >
            Pour célébrer l'annonce de leur prochaine tournée, ''LE NOM DU GROUPE'' nous fait 
            l'honneur de vous proposez une soirée en musique où le groupe ''LE NOM DU GROUPE'' 
            sera accompagner de 3 artistes mystères. A vivre chez Burger House !
        </Slide>,
        <Slide
            image={EventImage3}
            category='Burger personnalisé'
            title='Composez votre propre burger'
            description= "Image d'un burger personnalisé"
        >
            Chez Burger House, vous avez la possibilité de composer votre propre burger. 
            Choisissez votre pain, votre viande, vos légumes et votre sauce. Nous nous occupons du reste. 
            Venez déguster votre propre création.
        </Slide>,
    ];

    return (
        <Container>
            <div className='shadow-2xl mb-20 rounded-md  border border-gray-100'>
                <AliceCarousel 
                    mouseTracking // permet de suivre le carousel avec la souris
                    items={items} // contenu du carousel
                    autoPlay // carousel automatique
                    infinite // boucle infinie
                    autoPlayInterval='4000' // intervalle de temps entre chaque slide
                    disableButtonsControls // désactive les boutons de contrôle
                    animationType='fadeout' // animation de transition
                />
            </div>
        </Container>
    )
}
