import React from 'react'

export default function Heading(props) {

    const { 
        children, // text
        variant, // h2, h3 or h4
        theme, // style
        display, // color
        alignement, // text alignement
        className // custom class
    } = props;

    const classDafault = 'uppercase'
    let font, color, align;

    // style
    switch (theme) {
        case 'secondary':
            font = 'font-secondary'
            break;
        default:
            font = 'tracking-tighter'
            break;
    }

    // color
    switch (display) {
        case 'gray':
            color = 'text-gray-600'
            break;
        default:
            color = 'text-secondary'
            break;
    }

    // text alignement
    switch (alignement) {
        case 'center':
            align = 'justify-center'
            break;
        case 'right':
            align = 'justify-end'
            break;
        default:
            align = 'justify-start'
            break;
    }

    // h2, h3 or h4
    switch (variant) {
        case 'h3':
            return (
                <div className={`flex ${align}`}>
                    <h3 className={`text-2xl ${classDafault} ${className} ${font} ${color}`}>
                        {children}
                    </h3>
                </div>
            )
        case 'h4':
            return (
                <div className={`flex ${align}`}>
                    <h3 className={`text-lg ${classDafault} ${className} ${font} ${color}`}>
                        {children}
                    </h3>
                </div>
            )
        default:
            return (
                <div className={`flex ${align}`}>
                    <h2 className={` ${theme === 'secondary' ? 'text-5xl' : 'text-3xl'} ${className} ${classDafault} ${font} ${color}`}>
                        {children}
                    </h2>
                </div>
            )
    }
}
