import { FC } from 'react'
import cl from './About.module.scss'

const About: FC = () => {
  return (
    <section className={cl.about}>
      <div className="_container">
        <div className={cl.about__body}>
          <div className={cl.about__content}>
            <div className={cl.about__item}>
              <h1 className="title" data-aos='fade-up'
                data-aos-delay='800'
              >What out clients say</h1>
              <p className="text" data-aos='fade-up'
                data-aos-delay='1000'>See what our customer say about us. It really matter for us. How good or bad<br />
                we will make ir for evaluation to make EhyalLive better.</p>
            </div>
            <div className={cl.about__item} data-aos='fade-up'
              data-aos-delay='1200'>
              <div className={cl.about__cards}>
                <div className={cl.about__card}>
                  <div className={cl.about__card__title}><span>starstar</span>
                    star</div>
                  <p className={cl.about__card__text}>“I know in real-time where the money is spent,and
                    I don’t have to lend out the company’s credit card
                    anymore. What a relief!”

                  </p>
                  <div className={cl.about__card__user}>
                    <div className={cl.about__card__img}>
                      <img src="./avt1.png" alt="" />
                    </div>
                    <div className={cl.about__card__description}>
                      <div className={cl.about__card__name}>Denny Hilguston</div>
                      <div className={cl.about__card__email}>@denny.hill</div>
                    </div>
                  </div>
                </div>
                <div className={cl.about__card}>
                  <div className={cl.about__card__title}><span>starstar</span>
                    star</div>
                  <p className={cl.about__card__text}>VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap.
                  </p>
                  <div className={cl.about__card__user}>
                    <div className={cl.about__card__img}>
                      <img src="./avt3.png" alt="" />
                    </div>
                    <div className={cl.about__card__description}>
                      <div className={cl.about__card__name}>Vani Pandey</div>
                      <div className={cl.about__card__email}>@vani.pandey</div>
                    </div>
                  </div>
                </div>
                <div className={cl.about__card}>
                  <div className={cl.about__card__title}><span>starstar</span>
                    star</div>
                  <p className={cl.about__card__text}>I can actually see the improvement in the graphics, not having the external sensors is a big plus.
                  </p>
                  <div className={cl.about__card__user}>
                    <div className={cl.about__card__img}>
                      <img src="./avt4.png" alt="" />
                    </div>
                    <div className={cl.about__card__description}>
                      <div className={cl.about__card__name}>milly Singh</div>
                      <div className={cl.about__card__email}>@milly.singh</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About