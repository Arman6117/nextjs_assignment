import React from 'react'
import './button.scss'

type ButtonProps ={
    children:React.ReactNode
}
const Button = ({children}:ButtonProps) => {
  return (
    <div className='buttonContainer'>
       <button className='ctaBtn'>{children}</button>
    </div>
  )
}

export default Button