import { FC } from 'react'
import cl from './Home.module.scss'
import Button from '@/components/ui/Button'

const HomePage: FC = () => {
  return (
    <section className={cl.home}>
      <div className="_container">
        <div className={cl.home__body}>
          <div className={cl.home__content}>
            <div className={cl.home__item}>
              <h1 className={cl.home__title} data-aos="fade-down" data-aos-delay="500" >Let's Explore <br />Three-Dimensional<br />visual</h1>
              <p className={cl.home__text} data-aos="fade-down" data-aos-delay="600">With virtual technology you can see the digital world feel more real and you can play the game with a new style.</p>
              <div className={cl.home__btns} data-aos="fade-down" data-aos-delay="700">
                <Button cl={cl.home__btn}>Get it Now</Button>
                <Button cl={cl.home__btn}><span>Explore Device</span></Button>
              </div>
              <div className={cl.home__people} data-aos="fade-down" data-aos-delay="900">
                <div className={cl.home__people__avatar}>
                  <img src={'./avt4.png'} alt='avatar' />
                </div>
                <div className={cl.home__people__avatar}>
                  <img src={'./avt2.png'} alt='avatar' />
                </div>
                <div className={cl.home__people__avatar}>
                  <img src={'./avt3.png'} alt='avatar' />
                </div>
                <div className={cl.home__people__avatar}>
                  <img src={'./avt1.png'} alt='avatar' />
                </div>
                <div className={cl.home__people__text}>400k people online</div>
              </div>
            </div>
            <div className={cl.home__item}>
              <div className={cl.home__banner} data-aos="fade-up" data-aos-delay="800">
                <img src={'./banner-img.svg'} alt='banner' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage