import { FC } from 'react'
import cl from './Headset.module.scss'

const Headset: FC = () => {
  return (
    <section className={cl.headset}>
      <div className="_container">
        <div className={cl.headset__body}>
          <div className={cl.headset__content}>
            <h1 className="title" data-aos='fade-down'>Mixed Reality Headsets</h1>
            <div className={cl.headset__cards}>
              <div className={cl.headset__card} data-aos='zoom-in' data-aos-delay='500' >
                <div className={cl.headset__card__img}>
                  <img src="./headset-1.png" alt="" />
                </div>
                <div className={cl.headset__card__description}>
                  <div className={cl.headset__card__title}>
                    Metaverse
                  </div>
                  <p className={cl.headset__card__text}>A Network of 3D virtual<br /> worlds focused on social<br /> connection. </p>
                </div>
              </div>
              <div className={cl.headset__card} data-aos='zoom-in' data-aos-delay='600'>
                <div className={cl.headset__card__img}>
                  <img src="./headset-2.png" alt="" />
                </div>
                <div className={cl.headset__card__description}>
                  <div className={cl.headset__card__title}>
                    AIoT
                  </div>
                  <p className={cl.headset__card__text}>AI and IoT are both emerging<br /> innovative technologies with<br /> a lot of potentials. </p>
                </div>
              </div>
              <div className={cl.headset__card} data-aos='zoom-in' data-aos-delay='800'>
                <div className={cl.headset__card__img}>
                  <img src="./headset-3.png" alt="" />
                </div>
                <div className={cl.headset__card__description}>
                  <div className={cl.headset__card__title}>
                    HoloLens
                  </div>
                  <p className={cl.headset__card__text}>HoloLens display information,<br /> blend with the real world , or<br /> even simulate a virtual world.  </p>
                </div>
              </div>
              <div className={cl.headset__card} data-aos='zoom-in' data-aos-delay='1000'>
                <div className={cl.headset__card__img}>
                  <img src="./headset-4.png" alt="" />
                </div>
                <div className={cl.headset__card__description}>
                  <div className={cl.headset__card__title}>
                    TPCASTT
                  </div>
                  <p className={cl.headset__card__text}>Method is great to start students <br />reading and inferring with little <br />assistance from the instructor. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Headset