import React from 'react'

export default function Heading(props) {

    const { 
        children, // text
        variant, // h2 or h3
        theme, // style
        display // color
    } = props;

    const classDafault = 'mt-5 uppercase'
    let font, color;

    switch (theme) {
        case 'secondary':
            font = 'font-secondary'
            break;
        default:
            font = 'tracking-tighter'
            break;
    }

    switch (display) {
        case 'gray':
            color = 'text-gray-600'
            break;
        default:
            color = 'text-secondary'
            break;
    }

    switch (variant) {
        case 'h3':
            return (
                <div className='flex items-center justify-center my-5'>
                    <h3 className={`text-2xl ${classDafault} ${font} ${color}`}>
                        {children}
                    </h3>
                </div>
            )
        default:
            return (
                <div className='flex items-center justify-center my-5'>
                    <h2 className={` ${theme === 'secondary' ? 'text-5xl' : 'text-3xl'} ${classDafault} ${font} ${color}`}>
                        {children}
                    </h2>
                </div>
            )
    }
}
