import React from 'react'

const Button = ({text,onclick}) => {
  return (
    <button className='px-3 py-2 bg-slate-500'>
      {text}
    </button>
  )
}

export default Button
