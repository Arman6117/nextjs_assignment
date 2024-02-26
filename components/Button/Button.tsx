import React from 'react'
import './button.scss'
import clsx from 'clsx'

type ButtonProps ={
    children:React.ReactNode
    className?:string
}
const Button = ({children,className}:ButtonProps) => {
  return (
    <div className='buttonContainer'>
       <button className={clsx('ctaBtn rounded-xl md:w-[232px] w-full text-sm md:text-base sm:px-0 px-10',className)}>{children}</button>
    </div>
  )
}

export default Button
