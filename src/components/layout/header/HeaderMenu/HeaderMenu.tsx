'use client'
import { FC, useEffect, useState } from 'react'
import cl from './HeaderMenu.module.scss'
import Button from '@/components/ui/Button'

const HeaderMenu: FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false)

  return (
    <>
      <nav className={menuActive ? `${cl.menu} ${cl.active}` : cl.menu}>
        <ul className={cl.menu__list}>
          <li className={`${cl.menu__link} ${cl.active}`}>Home</li>
          <li className={cl.menu__link}>Company</li>
          <li className={cl.menu__link}>Features</li>
          <li><Button>Sign Up</Button></li>
        </ul>
      </nav>
      <div className={menuActive ? `${cl.menu__burger} ${cl.active}` : cl.menu__burger}
        onClick={() => {
          setMenuActive(prev => !prev)
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  )
}

export default HeaderMenu