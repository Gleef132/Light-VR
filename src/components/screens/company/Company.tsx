'use client'
import { FC } from 'react'
import cl from './Company.module.scss'
import Button from '@/components/ui/Button'

const Company: FC = () => {
  return (
    <section className={cl.company}>
      <div className="_container">
        <div className={cl.company__body}>
          <div className={cl.company__content}>
            <div className={cl.company__item}>
              <h1 className="title" data-aos='fade-down'
                data-aos-delay='1200'
              >Our company values
                culture
              </h1>
              <p className="text" data-aos='fade-down'
                data-aos-delay='1400'>We specialize in creating visual identities for products and branda in your company.</p>
            </div>
            <div className={cl.company__item}>
              <div className={cl.company__icons} data-aos='fade-left'
                data-aos-delay='1600'>
                <div className={cl.company__icon}>
                  <div className={cl.company__icon__img}>
                    <img src="./icon-1.svg" alt="icon" />
                  </div>
                  <div className={cl.company__icon__title}>Be Sincere</div>
                </div>
                <div className={cl.company__icon}>
                  <div className={cl.company__icon__img}>
                    <img src="./icon-2.svg" alt="icon" />
                  </div>
                  <div className={cl.company__icon__title}>Stronger together</div>
                </div>
                <div className={cl.company__icon}>
                  <div className={cl.company__icon__img}>
                    <img src="./icon-3.svg" alt="icon" />
                  </div>
                  <div className={cl.company__icon__title}>Keep it simple</div>
                </div>
                <div className={cl.company__icon}>
                  <div className={cl.company__icon__img}>
                    <img src="./icon-4.svg" alt="icon" />
                  </div>
                  <div className={cl.company__icon__title}>Take intelligent risks</div>
                </div>
              </div>
            </div>
          </div>
          <div className={cl.company__contact}>
            <div className={cl.company__contact__content}>
              <div className={cl.company__contact__item}>
                <h1 className="title" data-aos='fade-right'
                  data-aos-delay='1900'>Explore product in<br />new way</h1>
                <p className="text" data-aos='fade-right'
                  data-aos-delay='2000'>We specialize in creating visual identities for<br /> products and branda in your company.</p>
                <form onClick={(e) => e.preventDefault()} action="" method="post" className={cl.company__contact__form} data-aos='fade-right'
                  data-aos-delay='2100'
                  data-aos-offset="1300">
                  <input type="text" placeholder='Your Email' />
                  <Button cl={cl.company__contact__form__btn}>Start <img src="./arrow.svg" alt="arrow" /></Button>
                </form>
              </div>
            </div>
            <div className={cl.company__contact__img}>
              <img src="./explore.png" alt="explore" />
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Company