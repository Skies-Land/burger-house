import React from 'react'

export default function Button({ children, className }) {
  return (
    <div>
      <button className={`${className} px-4 py-3 uppercase shadow-xl text-white tracking-widest text-sm font-medium animate'`}>
        {children}
      </button>
    </div>
  )
}
