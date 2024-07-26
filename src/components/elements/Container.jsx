import React from 'react'

export default function Container({ children }) {
  return (
    <div className='relative z-10 max-w-6xl h-full m-auto'>
      {children}
    </div>
  )
}
