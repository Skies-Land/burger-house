import React from 'react'

export default function Container({ children }) {
  return (
    <div className='relative z-10 max-w-6xl h-full mx-auto px-5 xl:px-0'>
      {children}
    </div>
  )
}
