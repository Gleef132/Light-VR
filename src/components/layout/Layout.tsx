'use client'
import { FC, PropsWithChildren, useEffect } from 'react'
import Header from './header/Header'
import { FontsVariables } from '@/app/fonts'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
      delay: 400,
    })
  })

  return (
    <>
      <html lang="en">
        <body className={FontsVariables}>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </>
  )
}

export default Layout