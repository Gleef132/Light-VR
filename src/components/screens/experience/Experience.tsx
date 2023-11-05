'use client'
import { FC, useState } from 'react'
import cl from './Experience.module.scss'
import Button from '@/components/ui/Button'
import Popup from '@/components/ui/Popup'

const Experience: FC = () => {
  const [popupActive, setPopupActive] = useState<boolean>(false)

  const showPopup = () => {
    setPopupActive(true);
    (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden';
    (document.querySelector('html') as HTMLElement).style.overflow = 'hidden';
  }

  const hiddenPopup = () => {
    setPopupActive(false);
    (document.querySelector('body') as HTMLBodyElement).style.overflow = 'auto';
    (document.querySelector('html') as HTMLElement).style.overflow = 'auto';
  }

  return (
    <>
      <section className={cl.experience}>
        <div className="_container">
          <div className={cl.experience__body}>
            <div className={cl.experience__content}>
              <div className={cl.experience__item}>
                <div className={cl.experience__item__img} data-aos='fade-down' data-aos-offset='400' >
                  <img src="exp-img1.png" alt="exp" />
                </div>
                <div className={cl.experience__item__img} data-aos='fade-up' data-aos-offset='400'>
                  <img src="exp-img2.png" alt="exp" />
                </div>
              </div>
              <div className={cl.experience__item} data-aos='fade-left' data-aos-offset='400'>
                <h1 className={`title`}>New Experience In
                  Playing Game</h1>
                <p className={`text`}>You can try playing the game with a
                  new style and of course a more real
                  feel, like you are the main character
                  in your game and adventure in this
                  new digital world.</p>
                <Button cl={cl.experience__btn}>Get it Now</Button>
              </div>
            </div>
          </div>
        </div>
        <div className={cl.experience__footer}>
          <div className={`${cl.experience__footer__container} _container`}>
            <h1 className={`${cl.experience__footer__title}`} data-aos='fade-right' data-aos-offset='350'>Awesome experiences with
              virtual reality world</h1>
            <div className={cl.experience__footer__preview} onClick={showPopup}
              data-aos='fade-left' data-aos-offset='350'>
              <img src="video-bg.png" alt="preview" />
            </div>
          </div>
        </div>
      </section>
      <Popup cl={popupActive ? `${cl.popup} ${cl.active}` : cl.popup}>
        <div className={cl.popup__video}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/NOk_M1Ib5F0?si=0JuBDVzc6Ly6DZQM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className={cl.popup__close} onClick={hiddenPopup} ></div>
      </Popup>
    </>
  )
}

export default Experience