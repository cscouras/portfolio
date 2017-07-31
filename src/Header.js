import React from 'react'
import logo from './CS-logo.svg'

const Header = ({name}) => {
  return (
    <header className='header'>
      <img src={logo} alt='logo' className='logo'/>
      <h1 className='site-title'>{name}</h1>
    </header>
  )
}

export default Header
