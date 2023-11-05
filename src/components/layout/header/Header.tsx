import { FC } from 'react'
import cl from './Header.module.scss'
import HeaderMenu from './HeaderMenu/HeaderMenu'

const Header: FC = () => {
  return (
    <header className={cl.header} data-aos="fade-down" data-aos-duration="2000" data-aos-delay='900'>
      <div className="_container">
        <div className={cl.header__body}>
          <div className={cl.header__logo}><img src="./logo.svg" alt="logo" /></div>
          <HeaderMenu />
        </div>
      </div>
    </header>
  )
}

export default Header