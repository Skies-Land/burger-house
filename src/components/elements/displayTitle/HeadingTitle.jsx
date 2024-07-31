import React from 'react'

export default function HeadingTitle(props) {

    const {
        children, // text
        variant // h2 or h3
    } = props;

    const classDafault = 'px-7 py-3 bg-primary text-secondary uppercase font-bold inline-block'

    switch (variant) {
        case 'h3':
            return (
                <div className='flex items-center justify-center my-5'>
                    <h3 className={`text-sm ${classDafault}`}>
                        {children}
                    </h3>
                </div>
            )
        default:
            return (
                <div className='flex items-center justify-center my-5'>
                    <h2 className={` ${classDafault}`}>
                        {children}
                    </h2>
                </div>
            )
    }
}
